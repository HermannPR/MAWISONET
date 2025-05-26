const Boton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'primary',
  ...props 
}) => {
  const getButtonClass = () => {
    const baseClass = 'boton';
    const variantClass = variant === 'outline' ? 'boton-outline' : 'boton-primary';
    const disabledClass = disabled ? 'boton-disabled' : '';
    
    return `${baseClass} ${variantClass} ${disabledClass}`.trim();
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getButtonClass()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Boton;
