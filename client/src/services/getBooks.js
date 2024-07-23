import { axiosClient } from '../lib/axiosClient';

export const getAllBooks = async () => {
  try {
    const res = await axiosClient.get('/api/books/all');
    return res.data;
  } catch (error) {
    console.log('Error al obtener los libros', error);
    throw error;
  }
};

export const getBooksById = async (id) => {
  try {
    const res = await axiosClient.get(`/books/${id}`);
    return res.data;
  } catch (error) {
    console.log(`Error al obtener el libro con id ${id}`, error);
    throw error;
  }
};
