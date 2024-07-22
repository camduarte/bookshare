import { z } from 'zod';

export const bookSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  author: z.string().min(1, 'El autor es requerido'),
  genre: z.string().min(1, 'El género es requerido'),
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
    .min(10, 'La descripción debe tener al menos 10 caracteres'),
  imgUrl: z.string().url('Debe ser una URL válida'),
});
