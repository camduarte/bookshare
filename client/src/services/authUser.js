import { axiosClient } from '../lib/axiosClient';

export const registerUser = async (userData) => {
  const result = await axiosClient.post('/register', userData);
  return result.data;
};

export const loginUser = async (userData) => {
  const result = await axiosClient.post('/login', userData);
  return result.data;
};
