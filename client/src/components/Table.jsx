import React, { useState } from 'react';
import '../styles/components/table.css';
import { EditIcon, TrashIcon } from '../assets/icons';
import Button from './ui/Button';
import DeleteModal from './DeleteModal';
import FormModalEdit from './FormModalEdit';

const Table = ({ books }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);

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
                  onClick={() => setOpenFormModal(true)}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() => setDeleteModalOpen(true)}
                >
                  <TrashIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteModalOpen && (
        <DeleteModal onClose={() => setDeleteModalOpen(false)} />
      )}
      {openFormModal && (
        <FormModalEdit onClose={() => setOpenFormModal(false)} />
      )}
    </>
  );
};

export default Table;
