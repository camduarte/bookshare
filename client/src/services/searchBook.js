import { axiosClient } from '../lib/axiosClient';

export const getSearchData = async (searchTerm) => {
  try {
    const result = await axiosClient.get('/api/books/search', {
      params: { q: searchTerm },
    });
    return result.data;
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};
