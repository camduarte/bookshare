import React, { useState } from 'react';
import '../styles/components/table.css';
import { EditIcon, TrashIcon } from '../assets/icons';
import Button from './ui/Button';
import DeleteModal from './DeleteModal';

const Table = ({ books, onEdit }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const handleDeleteClick = (book) => {
    setBookToDelete(book);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <table className='table-container-header'>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Género</th>
            <th>Año de Publicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book.id}>
              <td>
                <a href={`detalles/${book.id}`}>{book.title}</a>
              </td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td className='actions'>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() => onEdit(book)}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() => handleDeleteClick(book)}
                >
                  <TrashIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteModalOpen && (
        <DeleteModal
          onClose={() => setDeleteModalOpen(false)}
          book={bookToDelete}
        />
      )}
    </>
  );
};

export default Table;
