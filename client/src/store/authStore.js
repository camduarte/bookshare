import { create } from 'zustand';
import Cookies from 'js-cookie';
import {
  getBooksData,
  getUser,
  loginUser,
  registerUser,
} from '../services/authUser';

const useAuthStore = create((set, get) => ({
  token: Cookies.get('authToken') || null,
  isLoading: false,
  error: null,
  user: null,
  booksData: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await loginUser({ email, password });

      const token = res.token || res;
      Cookies.set('authToken', token, { expires: 7 });
      set({ token, isLoading: false });
      return token;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      await registerUser(userData);

      const res = await loginUser({
        email: userData.email,
        password: userData.password,
      });
      const token = res.token || res;
      Cookies.set('authToken', token, { expires: 7 });
      set({ token, isLoading: false });
      return token;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchUserData: async () => {
    const { token } = get();
    console.log(token);
    if (!token) {
      console.error('No token found');
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const data = await getUser(token);
      set({ user: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchBooksData: async () => {
    const { token } = get();
    console.log(token);
    if (!token) {
      console.error('No token found');
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const data = await getBooksData(token);
      set({ booksData: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  logout: () => {
    Cookies.remove('authToken');
    set({ token: null });
  },

  clearError: () => {
    set({ error: null });
  },

  isAuthenticated: () => !!get().token,
}));

export default useAuthStore;
