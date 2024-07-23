import { create } from 'zustand';
import Cookies from 'js-cookie';
import { getAllBooks, getBooksById } from '../services/getBooks';
import { postBook } from '../services/addBook';
import { editBook } from '../services/editBook';
import { deleteBook } from '../services/deleteBook';
import { getSearchData } from '../services/searchBook';
import { getBookById } from '../services/authUser';
import { getBooksByGenre } from '../services/filterBooks';
import useAuthStore from './authStore';

const useBookStore = create((set, get) => {
  const getToken = () => useAuthStore.getState().token;
  const handleApiCall = async (apiCall, errorMessage) => {
    const token = getToken();
    if (!token) {
      set({ error: 'No se encontró el token de autenticación' });
      return null;
    }

    set({ isLoading: true });
    try {
      const result = await apiCall(token);
      set({ isLoading: false, error: null });
      return result;
    } catch (error) {
      set({ error: errorMessage, isLoading: false });
      console.error(error);
      return null;
    }
  };

  return {
    allBooks: [],
    currentBook: null,
    filteredBooks: [],
    isLoading: false,
    error: null,

    fetchAllBooks: async () => {
      const data = await handleApiCall(
        (token) => getAllBooks(token),
        'Error al cargar los libros'
      );
      if (data) set({ allBooks: data, filteredBooks: data });
    },

    fetchBookById: async (id) => {
      const data = await handleApiCall(
        () => getBooksById(id),
        `Error al cargar libro con id ${id}`
      );
      if (data) set({ currentBook: data });
    },

    fetchBookByIdUser: async (id) => {
      const data = await handleApiCall(
        (token) => getBookById(token, id),
        'Error al buscar libros'
      );
      if (data) set({ currentBook: data });
    },

    createBook: async (bookData) => {
      await handleApiCall(
        (token) => postBook(token, bookData),
        'Error al crear el libro'
      );
    },

    updateBook: async (id, bookData) => {
      await handleApiCall(
        (token) => editBook(token, id, bookData),
        'Error al actualizar el libro'
      );
    },

    deleteBook: async (id) => {
      await handleApiCall(
        (token) => deleteBook(token, id),
        'Error al eliminar el libro'
      );
    },

    searchBooks: async (searchTerm) => {
      const data = await handleApiCall(
        (token) => getSearchData(token, searchTerm),
        'Error al buscar libros'
      );
      if (data) set({ searchResults: data });
    },

    filterBooks: async (params) => {
      let apiCall;
      let errorMessage;

      if (params.searchTerm) {
        apiCall = (token) => getSearchData(token, params.searchTerm);
        errorMessage = 'Error al buscar libros';
      } else if (params.genre) {
        apiCall = (token) => getBooksByGenre(token, params.genre);
        errorMessage = 'Error al filtrar libros por género';
      } else {
        apiCall = (token) => getAllBooks(token);
        errorMessage = 'Error al cargar los libros';
      }

      const data = await handleApiCall(apiCall, errorMessage);
      if (data) {
        set({ filteredBooks: data });
        if (!params.searchTerm && !params.genre) set({ allBooks: data });
      }
    },

    clearError: () => set({ error: null }),

    clearFilteredBooks: () => {
      const { allBooks } = get();
      set({ filteredBooks: allBooks });
    },
  };
});

export default useBookStore;
