import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { useEffect } from 'react';
import Router from './router/Router';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
