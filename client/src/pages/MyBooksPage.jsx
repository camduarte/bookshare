import { useEffect, useState } from 'react';
import { PlusIcon } from '../assets/icons';
import Table from '../components/Table';
import Button from '../components/ui/Button';
import '../styles/pages/myBooksPage.css';
import FormModal from '../components/FormModal';
import useAuthStore from '../store/authStore';

export default function MyBooksPage() {
  const { fetchBooksData, booksData } = useAuthStore();
  const [openFormModal, setOpenFormModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooksData();
  }, [fetchBooksData]);

  const handleEditBook = (book) => {
    setEditingBook(book);
    setOpenFormModal(true);
  };

  return (
    <>
      <main className='container' style={{ marginTop: '10rem' }}>
        <div className='my-books-container'>
          <h1 className='primary-title'>Mis Libros</h1>
          <div className='button-container'>
            <Button
              leftIcon={<PlusIcon />}
              onClick={() => setOpenFormModal(true)}
            >
              Añadir Nuevo Libro
            </Button>
          </div>
          <div className='table-container'>
            <Table books={booksData} onEdit={handleEditBook} />
          </div>
        </div>
      </main>
      {openFormModal && (
        <FormModal onClose={() => setOpenFormModal(false)} book={editingBook} />
      )}
    </>
  );
}
