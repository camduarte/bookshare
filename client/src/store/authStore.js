import { create } from 'zustand';
import Cookies from 'js-cookie';
import {
  getBooksData,
  getUser,
  loginUser,
  registerUser,
} from '../services/authUser';
import { postBook } from '../services/addBook';
import { editBook } from '../services/editBook';
import { deleteBook } from '../services/deleteBook';

const useAuthStore = create((set, get) => {
  const handleApiCall = async (apiCall, errorMessage) => {
    set({ isLoading: true, error: null });
    try {
      const result = await apiCall();
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ error: error.message || errorMessage, isLoading: false });
      throw error;
    }
  };

  const setToken = (token) => {
    Cookies.set('authToken', token, { expires: 7 });
    set({ token });
  };

  return {
    token: Cookies.get('authToken') || null,
    isLoading: false,
    error: null,
    user: null,
    booksData: null,

    login: async (email, password) => {
      const res = await handleApiCall(
        () => loginUser({ email, password }),
        'Error al iniciar sesión'
      );
      const token = res.token || res;
      setToken(token);
      return token;
    },

    register: async (userData) => {
      await handleApiCall(
        () => registerUser(userData),
        'Error al registrar usuario'
      );
      return get().login(userData.email, userData.password);
    },

    fetchUserData: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getUser(token),
        'Error al obtener datos del usuario'
      );
      if (data) set({ user: data });
    },

    fetchBooksData: async () => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      const data = await handleApiCall(
        () => getBooksData(token),
        'Error al obtener datos de los libros'
      );
      if (data) set({ booksData: data });
    },

    createBook: async (bookData) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      await handleApiCall(
        () => postBook(token, bookData),
        'Error al crear el libro'
      );
    },

    updateBook: async (id, bookData) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      await handleApiCall(
        () => editBook(token, id, bookData),
        'Error al actualizar el libro'
      );
    },

    deleteBook: async (id) => {
      const { token } = get();
      if (!token) {
        set({ error: 'No se encontró el token de autenticación' });
        return;
      }
      await handleApiCall(
        () => deleteBook(token, id),
        'Error al eliminar el libro'
      );
    },

    logout: () => {
      Cookies.remove('authToken');
      set({ token: null, user: null, booksData: null });
    },

    clearError: () => set({ error: null }),

    isAuthenticated: () => !!get().token,
  };
});

export default useAuthStore;
