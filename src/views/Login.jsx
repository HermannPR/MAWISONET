import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, CircularProgress, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ({ login }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password }),
      });
      const data = await response.json();
      if (data.isLogin) {
        login(user);
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      if (user === 'admin' && password === 'admin') {
        login(user);
      } else {
        setError('Credenciales incorrectas. Prueba admin/admin');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #646cff, #535bf2)',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 360,
          width: '100%',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LockOutlinedIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
        <Typography
          variant="h5"
          component="h1"
          fontWeight={700}
          mb={2}
          align="center"
        >
          Iniciar Sesión
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: '100%' }}
        >
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoFocus
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              mb: 1,
              py: 1.2,
              fontWeight: 600,
              fontSize: '1rem',
            }}
            disabled={loading}
            size="large"
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Iniciar Sesión'
            )}
          </Button>
        </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            <strong>Credenciales de prueba:</strong>
            <br />
            Usuario: admin
            <br />
            Contraseña: admin
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
