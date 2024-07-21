import { create } from 'zustand';
import Cookies from 'js-cookie';
import { getBooks, getBooksById } from '../services/getBooks';
import { postBook } from '../services/addBook';
import { editBook } from '../services/editBook';
import { deleteBook } from '../services/deleteBook';
import { getSearchData } from '../services/searchBook';

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
    books: [],
    currentBook: null,
    searchResults: [],
    isLoading: false,
    error: null,

    fetchBooks: async () => {
      const data = await handleApiCall(
        () => getBooks(),
        'Error al cargar los libros'
      );
      if (data) set({ books: data });
    },

    fetchBookById: async (id) => {
      const data = await handleApiCall(
        () => getBooksById(id),
        `Error al cargar libro con id ${id}`
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

    clearError: () => set({ error: null }),

    clearSearchResults: () => set({ searchResults: [] }),
  };
});

export default useBookStore;
