package com.hackatong7.server.application.validators;

import java.util.regex.Pattern;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

/**
 * Validador para verificar que las contraseñas cumplan con un conjunto específico de reglas.
 * La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula,
 * un número y un carácter especial.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
public class PasswordConstraintValidator implements ConstraintValidator<ValidPassword, String> {

    /**
     * Patrón de expresión regular para la validación de contraseñas.
     * Debe contener al menos un número, una letra minúscula, una letra mayúscula,
     * un carácter especial y no debe contener espacios en blanco. La longitud mínima es de 8 caracteres.
     */
    private static final String PASSWORD_PATTERN =
        "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$";

    @Override
    public void initialize(ValidPassword constraintAnnotation) {
    }

    /**
     * Valida que la contraseña proporcionada cumpla con el patrón definido.
     * 
     * @param password la contraseña a validar
     * @param context el contexto de la validación
     * @return true si la contraseña es válida, false en caso contrario
     */
    @Override
    public boolean isValid(String password, ConstraintValidatorContext context) {
        if (password == null || !Pattern.matches(PASSWORD_PATTERN, password)) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
                "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial"
            ).addConstraintViolation();
            return false;
        }
        return true;
    }
}
