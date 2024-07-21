import React from 'react';
import { SearchIcon } from '../../assets/icons';
import '../../styles/components/ui/input.css';

/**
 * Componente Input con label e icono opcional.
 *
 * @param {Object} props - Las propiedades del objeto.
 * @param {string} props.label - Label para el campo input.
 * @param {string} props.name - El nombre del campo input.
 * @param {React.ReactNode} [props.icon] - Icono a mostrar dentro del campo input.
 * @param {string} [props.type='text'] - El tipo de input por defecto es 'text'.
 * @param {string} [props.value] - El valor del campo input.
 * @param {function} [props.onChange] - Función para manejar el cambio de valor del campo input.
 * @param {boolean} [props.error=false] - Indica si hay un error asociado con el campo input.
 * @param {string} [props.errorMessage] - Mensaje de error a mostrar si hay un error.
 * @param {string} [props.className=''] - Clases CSS adicionales para aplicar al contenedor del campo input.
 * @param {boolean} [props.required=false] - Indica si el campo input es obligatorio.
 * @param {React.Ref} ref - La referencia que se adjuntará al elemento input.
 * @param {Object} [props.props] - Cualquier otra propiedad adicional que se pasará al input.
 *
 * @returns {JSX.Element} El componente input renderizado.
 *
 * @example
 * // Uso básico del componente Input
 * <Input
 *   label="Nombre"
 *   name="nombre"
 *   icon
 *   value={valor}
 *   onChange={manejarCambio}
 *   error={tieneError}
 *   errorMessage="Este campo es obligatorio"
 *   required
 * />
 */
const Input = React.forwardRef(
  (
    {
      label,
      name,
      icon,
      type = 'text',
      isError = false,
      errorMessage,
      className = '',
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`inputWithLabel ${className}`}>
        <label htmlFor={name} className='inputLabel'>
          {label} {required && <span className='requiredIndicator'>*</span>}
        </label>
        <div className='inputContainer'>
          {icon && (
            <span className='inputIcon'>
              <SearchIcon />
            </span>
          )}

          <input
            ref={ref}
            type={type}
            name={name}
            className={`input ${icon ? 'inputIconPosition' : ''}`}
            {...props}
          />
        </div>
        {isError && <span className='errorMessage'>*{errorMessage}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
