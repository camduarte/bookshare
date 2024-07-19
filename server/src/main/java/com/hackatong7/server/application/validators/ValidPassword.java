package com.hackatong7.server.application.validators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

/**
 * Anotación personalizada para validar contraseñas.
 * Las contraseñas deben cumplir con los requisitos de seguridad definidos en {@link PasswordConstraintValidator}.
 * 
 * <p>
 * Este archivo está bajo la Licencia Pública General de GNU.
 * </p>
 * 
 * @autor Christian Ariel Modesto Duarte
 * @version 1.0
 * @since 2024-07-18
 */
@Constraint(validatedBy = PasswordConstraintValidator.class)
@Target({ ElementType.FIELD, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPassword {
    
    /**
     * Mensaje de error que se mostrará si la contraseña no cumple con los requisitos de seguridad.
     * 
     * @return el mensaje de error por defecto
     */
    String message() default "La contraseña no cumple con los requisitos de seguridad";

    /**
     * Grupos de validación a los que pertenece esta anotación.
     * 
     * @return una matriz de clases de grupo
     */
    Class<?>[] groups() default {};

    /**
     * Información adicional sobre la carga útil de la anotación.
     * 
     * @return una matriz de clases de carga útil
     */
    Class<? extends Payload>[] payload() default {};
}
