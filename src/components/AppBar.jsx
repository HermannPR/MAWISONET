import { AppBar as MuiAppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const AppBar = ({ user, logout }) => {
  return (
    <MuiAppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1">👤 {user}</Typography>
          <Button color="inherit" onClick={logout}>
            Cerrar Sesión
          </Button>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
