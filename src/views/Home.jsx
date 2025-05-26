import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = ({ user }) => {
  const [counter, setCounter] = useState(0);

  return (
    <Box sx={{ padding: 4 }} className="home-container">
      <div className="welcome-section">
        <Typography variant="h4" gutterBottom>
          ¡Bienvenido, {user}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Este es un ejemplo de un párrafo con una variable dinámica:
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          Contador: {counter}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCounter(counter + 1)}
        >
          Incrementar Contador
        </Button>
      </div>
      
      <div className="content-section">
        <h2>Panel Principal</h2>
        <div className="cards-container">
          <div className="info-card">
            <h3>📊 Dashboard</h3>
            <p>Accede a tus estadísticas y métricas principales.</p>
          </div>
          
          <div className="info-card">
            <h3>👤 Perfil</h3>
            <p>Gestiona tu información personal y configuración.</p>
          </div>
          
          <div className="info-card">
            <h3>🔧 Configuración</h3>
            <p>Personaliza tu experiencia en la aplicación.</p>
          </div>
          
          <div className="info-card">
            <h3>📝 Actividad Reciente</h3>
            <p>Revisa tus últimas acciones y notificaciones.</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Home;
