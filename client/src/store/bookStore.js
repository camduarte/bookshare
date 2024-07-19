import { create } from 'zustand';
import { getBooks, getBooksById } from '../services/getBooks';

const useBookStore = create((set) => ({
  books: [],
  currentBook: null,
  loading: false,
  error: null,
  fetchBooks: async () => {
    set({ loading: true });
    try {
      const data = await getBooks();
      set({ books: data, loading: false, error: null });
    } catch (error) {
      set({ error: 'Error al cargar los libros', loading: false });
    }
  },
  fetchBookById: async (id) => {
    set({ loading: true });
    try {
      const data = await getBooksById(id);
      set({ currentBook: data, loading: false, error: null });
    } catch (error) {
      set({ error: `Error al cargar libro con id ${id}`, loading: false });
    }
  },
}));

export default useBookStore;
