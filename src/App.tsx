import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Headline from './components/Headline';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Headline />
    </ThemeProvider>
  );
}

export default App;
