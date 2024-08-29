import { createTheme } from '@mui/material/styles';
import HeorotTtf from './fonts/heorot.ttf';

const theme = createTheme({
    palette: {
        background: {
            default: '#2C2E2F',
        },
        primary: {
            main: '#959A77',
            light: '#E7E5B6',
            dark: '#9C8C18',
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#93929A',
            // light: will be calculated from palette.secondary.main,
            // dark: will be calculated from palette.secondary.main,
            // contrastText: will be calculated from palette.secondary.main,
        },
    },
    typography: {
        fontFamily: 'Arial',
        h1: {
            fontFamily: 'Heorot',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Heorot';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Heorot'), url(${HeorotTtf}) format('ttf');
        }
      `,
        },
    },

});

export default theme;
