import { axiosClient } from '../lib/axiosClient';

export const editBook = async (token, id, bookData) => {
  try {
    const result = await axiosClient.put(`/api/books/${id}`, bookData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result.data;
  } catch (error) {
    console.error('Error al editar el libro:', error);
    throw error;
  }
};
