import { axiosClient } from '../lib/axiosClient';

export const getSearchData = async (token, searchTerm) => {
  try {
    const result = await axiosClient.get('/api/books/search', {
      headers: { Authorization: `Bearer ${token}` },
      params: { q: searchTerm },
    });
    return result.data;
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};
