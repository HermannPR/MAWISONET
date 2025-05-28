import { Button } from '@mui/material';

const Boton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'contained', 
  color = 'primary',
  ...props 
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Boton;
