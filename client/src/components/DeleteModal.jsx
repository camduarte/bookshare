// src/components/ConfirmDeleteModal.js
import React, { useState } from 'react';
import '../styles/components/deleteModal.css'; 
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import UserMenu from '../components/UserMenu';


/**
 * 
 * @param {boolean} isOpen indica si el modal debe mostrarse o no
 * @function onClose: se llama cuando el modal se cierra.
 * @function onConfirm: se llama cuando la acción de eliminación se confirma.
 * 
*/
const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  /**
 *
 *
 * @param {*} { isOpen, onClose, onConfirm }
 * @return {*} retorna el modal de confirmación de eliminación
 */
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmar Eliminación</h2>
        <p>¿Estás seguro de que deseas eliminar este libro?</p>
        <div className="modal-buttons">
            <Button  
            onClick={onClose}
            className="cancel-button"
            >Cancelar</Button>
             
             <Button
            onClick={onConfirm}
             className="confirm-button"
            >Confirmar</Button>
         
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;