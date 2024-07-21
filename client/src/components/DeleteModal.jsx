// src/components/ConfirmDeleteModal.js
import React from 'react';
import '../styles/components/deleteModal.css';
import { toast } from 'sonner';
import Button from './ui/Button';
import useBookStore from '../store/bookStore';

/**
 *
 * @param {boolean} isOpen indica si el modal debe mostrarse o no
 * @function onClose: se llama cuando el modal se cierra.
 * @function onConfirm: se llama cuando la acción de eliminación se confirma.
 *
 */
const DeleteModal = ({ onClose, book }) => {
  const { deleteBook } = useBookStore();
  /**
   *
   *
   * @param {*} { onClose, book }
   * @return {*} retorna el modal de cerrar modal y obtiene los datos del libro seleccionado
   */
  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      toast.success('Libro eliminado exitosamente');
      onClose();
      window.location.reload();
    } catch (error) {
      toast.error(
        `Error al eliminar el libro: ${error.message || 'Error desconocido'}`
      );
    }
  };
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Confirmar Eliminación</h2>
        <p>¿Estás seguro de que deseas eliminar este libro?</p>
        <div className='modal-buttons'>
          <Button onClick={onClose} className='cancel-button'>
            Cancelar
          </Button>

          <Button
            onClick={() => handleDeleteBook(book.id)}
            className='confirm-button'
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
