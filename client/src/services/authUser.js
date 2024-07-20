import { axiosClient } from '../lib/axiosClient';

export const registerUser = async (userData) => {
  const result = await axiosClient.post('/api/auth/register', userData);
  return result.data;
};

export const loginUser = async (userData) => {
  const result = await axiosClient.post('/api/auth/login', userData);
  return result.data;
};

export const getUser = async (token) => {
  const result = await axiosClient.get('/user', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.data;
};

export const getBooksData = async (token) => {
  const result = await axiosClient.get('/user/books', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.data;
};
