import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import HeorotTtf from './fonts/heorot.ttf';
import HeorotWoff from './fonts/heorot.woff';
import FuturaWoff from './fonts/futura.woff';

let theme = createTheme({
    palette: {
        background: {
            default: '#2C2E2F',
            paper: '#2C2E2F',
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
        fontFamily: 'Futura, Arial, sans-serif',
        h1: {
            fontFamily: 'Heorot, Times, serif',
        },
        h2: {
            fontFamily: 'Heorot, Times, serif',
        },
        h4: {
            textShadow: `-2px 2px 4px rgba(0, 0, 0, 0.5),
                2px -2px 0 rgba(0, 0, 0, 0.5);`,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Heorot';
          src: url(${HeorotWoff}) format('woff'), url(${HeorotTtf}) format('ttf');
        };
        @font-face {
          font-family: 'Futura';
          src: local('Futura'), url(${FuturaWoff}) format('woff');
        };
      `,
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiDivider: {
            defaultProps: {
                color: '#959A77'
            }
        }
    },

});
theme.palette.text.primary = theme.palette.secondary.main;
theme.typography.h1.color = theme.palette.primary.main;
theme.typography.h1.textShadow = `1px 1px 1px ${theme.palette.primary.dark}, -1px -1px 1px ${theme.palette.primary.light}`;
theme.typography.h2.color = theme.palette.primary.main;
theme.typography.h2.textShadow = `1px 1px 1px ${theme.palette.primary.dark}, -1px -1px 1px ${theme.palette.primary.light}`;
theme = responsiveFontSizes(theme);

export default theme;
