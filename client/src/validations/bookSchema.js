import { z } from 'zod';

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, 'El título es requerido')
    .max(150, 'El título no puede tener más de 150 caracteres'),
  author: z
    .string()
    .min(1, 'El autor es requerido')
    .max(50, 'El autor no puede tener más de 50 caracteres'),
  genre: z
    .string()
    .min(1, 'El género es requerido')
    .max(50, 'El género no puede tener más de 50 caracteres'),
  year: z
    .string()
    .refine(
      (val) => !Number.isNaN(parseInt(val, 10)),
      'Debe ser un número válido'
    )
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= 1000, 'El año debe ser mayor a 1000')
    .refine(
      (val) => val <= new Date().getFullYear(),
      'El año no puede ser futuro'
    ),
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(1000, 'La descripción no puede tener más de 1000 caracteres'),
  imgUrl: z
    .string()
    .url('Debe ser una URL válida')
    .refine((url) => /\.(webp|jpg|jpeg|png)$/i.test(url), {
      message: 'La URL debe ser una imagen en formato webp, jpg, jpeg o png',
    }),
});
