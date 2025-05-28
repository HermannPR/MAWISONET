import { Box, Container, Typography, Link, Stack, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 2 }} />
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; 2025 Mi Aplicación. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#privacy" color="inherit" underline="hover">Privacidad</Link>
            <Link href="#terms" color="inherit" underline="hover">Términos</Link>
            <Link href="#contact" color="inherit" underline="hover">Contacto</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
