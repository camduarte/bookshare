import { z } from 'zod';

/**
 * Se definen cuales son los requerimientos por cada propiedad
 * en el Schema de Autenticación,
 * también los mensajes que el usuario debe visualizar en caso de Error
 * Mas información: https://zod.dev/?id=objects
 */
export const AuthBaseSchema = z.object({
  name: z
    .string()
    .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
    .max(20, 'El nombre de usuario no puede tener más de 20 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El nombre de usuario solo puede contener letras, números, guiones y guiones bajos'
    )
    .trim(),
  email: z
    .string()
    .trim()
    .email('Introduzca una dirección de correo electrónico válida')
    .max(40, 'El correo electrónico no puede tener más de 40 caracteres'),
  password: z
    .string()
    .regex(/[A-Z]/, 'Debe tener al menos una letra mayúscula')
    .regex(/[a-z]/, 'Debe tener al menos una letra minúscula')
    .regex(/[0-9]/, 'Debe tener al menos un número')
    .regex(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      'Debe tener al menos un símbolo'
    )
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(50, 'La contraseña no puede tener más de 50 caracteres'),
});
/**
 * Para el registro, se requieren todos los campos,
 * junto a la comparación de Contraseña y Confirmación de contraseña
 */
export const RegisterSchema = AuthBaseSchema.extend({
  confirmPassword: z
    .string()
    .min(1, { message: 'Se requiere confirmar su contraseña' }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Las contraseñas no coinciden',
});

export const LoginSchema = AuthBaseSchema.pick({
  email: true,
  password: true,
});
