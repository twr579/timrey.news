import './App.css';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="primary.light" variant='h1'>TIM REYNOLDS</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
