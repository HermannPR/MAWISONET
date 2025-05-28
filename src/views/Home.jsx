import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = ({ user }) => {
  const [counter, setCounter] = useState(0);

  const handleMessage = () => {
    alert(`El contador vale: ${counter}`);
  };

  const handleSave = () => {
    console.log('Guardado el valor del contador:', counter);
  };

  return (
    <Box sx={{ p: 4, textAlign: 'center' }} className="home-container">
      <Typography variant="h5" gutterBottom>
        ¡Bienvenido, {user}!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCounter((c) => c + 1)}
        >
          Sumar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCounter((c) => c - 1)}
        >
          Restar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleMessage}
        >
          Mensaje
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
