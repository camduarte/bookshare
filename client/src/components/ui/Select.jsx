import React from 'react';
import '../../styles/components/ui/select.css';

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
        <select id={name} name={name} className='select' ref={ref} {...props}>
          <option value='' disabled selected>
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
