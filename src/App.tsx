import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Headline from './components/Headline';
import { useEffect } from 'react';
import IntroSection from './components/IntroSection';


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Headline />
      <IntroSection />
    </ThemeProvider>
  );
}

export default App;
