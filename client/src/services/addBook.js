import { axiosClient } from '../lib/axiosClient';

export const postBook = async (token, bookData) => {
  try {
    const result = await axiosClient.post('/api/books/create', bookData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result.data;
  } catch (error) {
    console.error('Error al crear el libro:', error);
    throw error;
  }
};
