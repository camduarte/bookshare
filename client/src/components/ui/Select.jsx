import React, { useState } from 'react';
import '../../styles/components/ui/select.css';

/**
 * Componente reutilizable select con label y manejo de errores.
 *
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className=""] - Clases adicionales para el contenedor del select.
 * @param {array} props.options - Opciones del select representadas como objetos {value, label}.
 * @param {string} props.placeholder - Texto del placeholder del select.
 * @param {string} props.name - Nombre del select y para asociar con el label.
 * @param {string} props.label - Texto del label asociado al select.
 * @param {boolean} props.required - Indica si el campo es obligatorio.
 * @param {boolean} props.error - Indica si hay un error en el campo.
 * @param {string} props.errorMessage - Mensaje de error a mostrar.
 * @param {object} ref - Ref para acceder al elemento select.
 * @param {...any} props - Otras props para pasar directamente al elemento select.
 *
 * @returns {JSX.Element} - JSX que representa el componente Select.
 *
 * @example
 * // Uso básico del componente Select
 * <Select
 *   label='select'
 *   options={options}
 *   placeholder='Filtrar por género'
 *   error
 *   errorMessage='dasdasd'
 * />
 *
 */

const Select = React.forwardRef(
  (
    {
      className,
      options = [],
      placeholder,
      name,
      label,
      required,
      error,
      errorMessage,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`inputWithLabel ${className}`}>
        {label && (
          <label htmlFor={name} className='inputLabel'>
            {label} {required && <span className='requiredIndicator'>*</span>}
          </label>
        )}
        <select
          id={name}
          name={name}
          className='select'
          value={value}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span className='errorMessage'>*{errorMessage || error}</span>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

export default Select;
