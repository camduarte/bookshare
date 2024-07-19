import { axiosClient } from '../lib/axiosClient';

export const getBooks = async () => {
  try {
    const res = await axiosClient.get('/books');
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
