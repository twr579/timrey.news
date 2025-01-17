import './App.css';
import { CssBaseline, styled, ThemeProvider } from '@mui/material';
import theme from './theme';
import { useEffect } from 'react';
import Router from './router/Router';


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const backgroundImage =
    `linear-gradient(144deg, ${theme.palette.background.default} 26px, transparent 27px),
    linear-gradient(-34deg, ${theme.palette.background.default} 25px, transparent 26px),
    linear-gradient(132deg, rgba(40, 40, 40, 1) 26px, transparent 27px),
    linear-gradient(128deg, rgba(200, 200, 200, 0.7) 26px, transparent 27px),

    linear-gradient(-41deg, rgba(200, 200, 200, 1) 27px, transparent 28px),
    linear-gradient(-52deg, rgba(40, 40, 40, 1) 27px, transparent 28px),

    linear-gradient(-125deg, ${theme.palette.background.default} 26px, transparent 27px),
    linear-gradient(55deg, ${theme.palette.background.default} 25px, transparent 26px),

    linear-gradient(-132deg, rgba(200, 200, 200, 1) 26px, transparent 27px),
    linear-gradient(-141deg, rgba(40, 40, 40, 1) 26px, transparent 27px),

    linear-gradient(42deg, rgba(40, 40, 40, 1) 27px, transparent 28px),
    linear-gradient(38deg, rgba(200, 200, 200, 0.5) 27px, transparent 28px);`

  const BackgroundImage = styled('div')({
    backgroundImage: backgroundImage,
    backgroundRepeat: 'repeat',
    backgroundSize: '100px 100px',
    backgroundPosition: `-16px 9px, -13px -11px,
    -13px 13px, -13px 16px,
    -13px -11px, -13px -16px,
    -23px -1px, -3px -1px, 
    -26px -1px, -30px -1px,
    -2px -1px, 1px -1px;`,
    paddingBottom: theme.spacing(1),
  });

  return (
    <BackgroundImage>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BackgroundImage>
  );
}

export default App;
