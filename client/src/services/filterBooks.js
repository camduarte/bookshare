import { axiosClient } from '../lib/axiosClient';

export const getBooksByGenre = async (genre) => {
  try {
    const res = await axiosClient.get('/api/books/byGender', {
      params: { genre: genre },
    });
    return res.data;
  } catch (error) {
    console.error('Error al filtrar los libros:', error);
    throw error;
  }
};
