package com.hackatong7.server.domain.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

    /**
     * Maneja la excepción {@link MethodArgumentNotValidException}, que ocurre cuando
     * hay errores de validación en los argumentos de un método anotado con {@link Valid}.
     * 
     * <p>Recopila todos los errores de validación de campos y los construye en un mensaje de error detallado.</p>
     * 
     * @param e la excepción lanzada durante la validación de los argumentos del método
     * @return una respuesta HTTP con un mensaje de error detallado y un estado de mala solicitud (400)
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorDTO> handleValidationExceptions(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        StringBuilder errorMessage = new StringBuilder("Errores de validación: ");
        errors.forEach((field, message) -> errorMessage.append(field).append(" - ").append(message).append("; "));

        ErrorDTO errorDTO = new ErrorDTO(errorMessage.toString(), HttpStatus.BAD_REQUEST.value());
        return new ResponseEntity<>(errorDTO, HttpStatus.BAD_REQUEST);
    }
}
