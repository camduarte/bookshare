import { axiosClient } from '../lib/axiosClient';

export const deleteBook = async (token, id) => {
  try {
    const result = await axiosClient.delete(`/api/books/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result.data;
  } catch (error) {
    console.error('Error al eliminar el libro:', error);
    throw error;
  }
};
