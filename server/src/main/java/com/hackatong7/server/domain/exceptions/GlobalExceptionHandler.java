package com.hackatong7.server.domain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hackatong7.server.application.dto.ErrorDTO;

/**
 * Controlador de manejo global de excepciones para la aplicación.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Maneja la excepción {@link UsuarioExistenteException}.
     * 
     * @param e la excepción lanzada cuando un usuario ya existe
     * @return una respuesta HTTP con un mensaje de error y un estado de conflicto (409)
     */
    @ExceptionHandler(UsuarioExistenteException.class)
    public ResponseEntity<ErrorDTO> handleUsuarioExistenteException(UsuarioExistenteException e) {
        ErrorDTO errorDTO = new ErrorDTO(e.getMessage(), HttpStatus.CONFLICT.value());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorDTO);
    }

    /**
     * Maneja la excepción {@link RegistroUsuarioException}.
     * 
     * @param e la excepción lanzada durante el registro de un usuario
     * @return una respuesta HTTP con un mensaje de error y un estado de mala solicitud (400)
     */
    @ExceptionHandler(RegistroUsuarioException.class)
    public ResponseEntity<ErrorDTO> handleRegistroUsuarioException(RegistroUsuarioException e) {
        ErrorDTO errorDTO = new ErrorDTO(e.getMessage(), HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorDTO);
    }

    /**
     * Maneja cualquier otra excepción no específica.
     * 
     * @param e la excepción general lanzada
     * @return una respuesta HTTP con un mensaje de error y un estado de error interno del servidor (500)
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDTO> handleGeneralException(Exception e) {
        ErrorDTO errorDTO = new ErrorDTO(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorDTO);
    }
}
