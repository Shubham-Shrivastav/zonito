import { createTheme } from '@mui/material/styles';

const black = {
  50: '#f9f9f9',
  100: '#f1f1f1',
  200: '#e8e8e8',
  300: '#d0d0d0',
  400: '#a8a8a8',
  500: '#808080',
  600: '#707070',
  700: '#606060',
  800: '#505050',
  900: '#404040',
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
      dark: '#b30000',
      light: '#ff6666',
    },
    secondary: {
      main: black[900],
      dark: black[800],
      light: black[500],
    },
  },
});

export default theme;
