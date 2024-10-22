import { create } from 'zustand';
import { getAllBooks, getBooksById } from '../services/getBooks';
import { postBook } from '../services/addBook';
import { getSearchData } from '../services/searchBook';
import { getBookById } from '../services/authUser';
import { getBooksByGenre } from '../services/filterBooks';

const useBookStore = create((set, get) => {
  const handleApiCall = async (apiCall, errorMessage) => {
    set({ isLoading: true });
    try {
      const result = await apiCall();
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
        () => getAllBooks(),
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

    searchBooks: async (searchTerm) => {
      const data = await handleApiCall(
        () => getSearchData(searchTerm),
        'Error al buscar libros'
      );
      if (data) set({ searchResults: data });
    },

    filterBooks: async (params) => {
      let apiCall;
      let errorMessage;

      if (params.searchTerm) {
        apiCall = () => getSearchData(params.searchTerm);
        errorMessage = 'Error al buscar libros';
      } else if (params.genre) {
        apiCall = () => getBooksByGenre(params.genre);
        errorMessage = 'Error al filtrar libros por género';
      } else {
        apiCall = () => getAllBooks();
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
