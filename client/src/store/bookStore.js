import { create } from 'zustand';
import Cookies from 'js-cookie';
import { getAllBooks, getBooksById } from '../services/getBooks';
import { postBook } from '../services/addBook';
import { editBook } from '../services/editBook';
import { deleteBook } from '../services/deleteBook';
import { getSearchData } from '../services/searchBook';
import { getBookById } from '../services/authUser';
import { getBooksByGenre } from '../services/filterBooks';

const useBookStore = create((set, get) => {
  const handleApiCall = async (apiCall, errorMessage) => {
    const { token } = get();
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
    token: Cookies.get('authToken') || null,
    allBooks: [],
    currentBook: null,
    filteredBooks: [],
    isLoading: false,
    error: null,

    fetchBooks: async () => {
      const data = await handleApiCall(
        () => getAllBooks(get().token),
        'Error al cargar los libros'
      );
      if (data) set({ allBooks: data });
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
        () => getBookById(get().token, id),
        'Error al buscar libros'
      );
      if (data) set({ currentBook: data });
    },

    createBook: async (bookData) => {
      await handleApiCall(
        () => postBook(get().token, bookData),
        'Error al crear el libro'
      );
    },

    updateBook: async (id, bookData) => {
      await handleApiCall(
        () => editBook(get().token, id, bookData),
        'Error al actualizar el libro'
      );
    },

    deleteBook: async (id) => {
      await handleApiCall(
        () => deleteBook(get().token, id),
        'Error al eliminar el libro'
      );
    },

    searchBooks: async (searchTerm) => {
      const data = await handleApiCall(
        () => getSearchData(get().token, searchTerm),
        'Error al buscar libros'
      );
      if (data) set({ searchResults: data });
    },

    filterBooks: async (params) => {
      let apiCall;
      let errorMessage;

      if (params.searchTerm) {
        apiCall = () => getSearchData(get().token, params.searchTerm);
        errorMessage = 'Error al buscar libros';
      } else if (params.genre) {
        apiCall = () => getBooksByGenre(get().token, params.genre);
        errorMessage = 'Error al filtrar libros por género';
      } else {
        apiCall = () => getAllBooks(get().token);
        errorMessage = 'Error al cargar los libros';
      }

      const data = await handleApiCall(apiCall, errorMessage);
      if (data) set({ filteredBooks: data });
    },

    clearError: () => set({ error: null }),

    clearFilteredBooks: () => set({ filteredBooks: [] }),
  };
});

export default useBookStore;
