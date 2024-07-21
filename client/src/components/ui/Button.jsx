import React from 'react';
import '../../styles/components/ui/button.css';

/**
 * Variantes para el componente de botón.
 * @type {Object.<string, string>}
 */
const buttonVariants = {
  default: 'defaultVariant',
  outline: 'outlineVariant',
  ghost: 'ghostVariant',
};

/**
 * Tamaños para el componente de botón.
 * @type {Object.<string, string>}
 */
const buttonSizes = {
  default: 'defaultSize',
  sm: 'smSize',
  lg: 'lgSize',
  icon: 'iconSize',
};

/**
 * Componente botón.
 *
 * @param {Object} props - Las propiedades del objeto.
 * @param {string} [props.className] - Clases CSS adicionales para aplicar al botón.
 * @param {string} [props.variant='default'] - Variante del botón ('default', 'outline', 'ghost').
 * @param {string} [props.size='default'] - Tamaño del botón ('default', 'sm', 'lg', 'icon').
 * @param {boolean} [props.asChild=false] - Indica si se debe renderizar el botón como un elemento hijo ('span') o un elemento 'button'.
 * @param {React.ReactNode} [props.leftIcon] - Icono para mostrar en el lado izquierdo del botón.
 * @param {React.ReactNode} [props.rightIcon] - Icono para mostrar en el lado derecho del botón.
 * @param {React.Ref} ref - La referencia que se adjuntará al elemento del botón.
 *
 * @returns {JSX.Element} El componente botón renderizado.
 *
 * @example
 * // Uso básico del componente Button
 * <Button variant="outline" size="lg" className="customClass" leftIcon={<Icon />} disabled>
 *   Click
 * </Button>
 */
const Button = React.forwardRef(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      asLink = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    let Comp;
    if (asLink) Comp = 'a';
    else if (asChild) Comp = 'span';
    else Comp = 'button';

    const variantClass = buttonVariants[variant] || buttonVariants.default;
    const sizeClass = buttonSizes[size] || buttonSizes.default;

    return (
      <Comp
        className={`button ${variantClass} ${sizeClass} ${className}`}
        ref={ref}
        {...props}
      >
        {leftIcon && <span style={{ marginRight: '4px' }}>{leftIcon}</span>}
        {props.children}
        {rightIcon && <span style={{ marginLeft: '4px' }}>{rightIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export default Button;
