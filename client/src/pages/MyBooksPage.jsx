import { memo, useCallback, useEffect, useState } from 'react';
import { PlusIcon } from '../assets/icons';
import Table from '../components/Table';
import Button from '../components/ui/Button';
import '../styles/pages/myBooksPage.css';
import FormModal from '../components/FormModal';
import useAuthStore from '../store/authStore';

export default function MyBooksPage() {
  const { fetchBooksData, booksData, isLoading } = useAuthStore();
  const [openFormModal, setOpenFormModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const MemoizedTable = memo(Table);

  useEffect(() => {
    fetchBooksData();
  }, [fetchBooksData]);

  const handleEditBook = useCallback((book) => {
    setEditingBook(book);
    setOpenFormModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenFormModal(false);
    setEditingBook(null);
  }, []);

  const handleOpenNewBookModal = useCallback(() => {
    setEditingBook(null);
    setOpenFormModal(true);
  }, []);

  return (
    <>
      <main className='container' style={{ marginTop: '10rem' }}>
        <div className='my-books-container'>
          <h1 className='primary-title'>Mis Libros</h1>
          <div className='button-container'>
            <Button leftIcon={<PlusIcon />} onClick={handleOpenNewBookModal}>
              Añadir Nuevo Libro
            </Button>
          </div>
          <div className='table-container'>
            <MemoizedTable
              books={booksData}
              onEdit={handleEditBook}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
      {openFormModal && (
        <FormModal onClose={handleCloseModal} book={editingBook} />
      )}
    </>
  );
}
