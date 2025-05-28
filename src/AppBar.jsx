import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppBar = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setProfileEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenu = (event) => {
    setProfileEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileEl(null);
  };

  return (
    <MuiAppBar position="fixed" sx={{ background: 'rgba(30, 41, 255, 0.95)' }}>
      <Toolbar>
        {/* Menú hamburguesa */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { handleClose(); navigate('/'); }}>Inicio</MenuItem>
          <MenuItem onClick={() => { handleClose(); navigate('/login'); }}>Login</MenuItem>
        </Menu>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: '#fff' }}>
          Mi Aplicación
        </Typography>
        {/* Perfil y logout */}
        <Box>
          <IconButton color="inherit" onClick={handleProfileMenu}>
            <Avatar sx={{ bgcolor: '#fff', color: '#1e29ff' }}>
              <AccountCircle />
            </Avatar>
          </IconButton>
          <Menu anchorEl={profileEl} open={Boolean(profileEl)} onClose={handleProfileClose}>
            <MenuItem disabled>👤 {user}</MenuItem>
            <MenuItem onClick={() => { handleProfileClose(); logout(); }}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
