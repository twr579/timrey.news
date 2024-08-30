import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Headline from './components/Headline';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Headline />
    </ThemeProvider>
  );
}

export default App;
