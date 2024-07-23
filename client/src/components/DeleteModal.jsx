// src/components/ConfirmDeleteModal.js
import React from 'react';
import '../styles/components/deleteModal.css';
import { toast } from 'sonner';
import Button from './ui/Button';
import useDelayedReload from '../hooks/useDelayedReload';
import { XIcon } from '../assets/icons';
import useAuthStore from '../store/authStore';

/**
 *
 * @param {boolean} isOpen indica si el modal debe mostrarse o no
 * @function onClose: se llama cuando el modal se cierra.
 * @function onConfirm: se llama cuando la acción de eliminación se confirma.
 *
 */
const DeleteModal = ({ onClose, book }) => {
  const { deleteBook } = useAuthStore();
  const delayedReload = useDelayedReload();
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
      delayedReload();
    } catch (error) {
      toast.error(
        `Error al eliminar el libro: ${error.message || 'Error desconocido'}`
      );
    }
  };
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <h2 className='modal-title'>Confirmar Eliminación</h2>
          <Button
            variant='ghost'
            size='icon'
            onClick={onClose}
            className='close-button'
          >
            <XIcon />
          </Button>
        </div>
        <p>¿Estás seguro de que deseas eliminar este libro?</p>
        <div className='modal-buttons'>
          <Button variant='outline' onClick={onClose}>
            Cancelar
          </Button>

          <Button onClick={() => handleDeleteBook(book.id)}>Confirmar</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
