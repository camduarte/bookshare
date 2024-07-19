import { create } from 'zustand';
import Cookies from 'js-cookie';
import { loginUser, registerUser } from '../services/authUser';

const useAuthStore = create((set, get) => ({
  token: Cookies.get('authToken') || null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const token = await loginUser({ email, password });

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

      const token = await loginUser({
        email: userData.email,
        password: userData.password,
      });
      Cookies.set('authToken', token, { expires: 7 });
      set({ token, isLoading: false });
      return token;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
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
