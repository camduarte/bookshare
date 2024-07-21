import { axiosClient } from '../lib/axiosClient';

export const registerUser = async (userData) => {
  try {
    const res = await axiosClient.post('/api/auth/register', userData);
    return res.data;
  } catch (error) {
    console.error('Error registrando usuario:', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await axiosClient.post('/api/auth/login', userData);
    return res.data;
  } catch (error) {
    console.error('Error iniciando sesión:', error);
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const res = await axiosClient.get('/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error obteniendo datos del usuario:', error);
    throw error;
  }
};

export const getBooksData = async (token) => {
  try {
    const res = await axiosClient.get('/api/books', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error obteniendo datos de los libros:', error);
    throw error;
  }
};

export const getBookById = async (token, id) => {
  try {
    const res = await axiosClient.get(`/api/books/get/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.log(`Error al obtener el libro con id ${id}`, error);
    throw error;
  }
};
