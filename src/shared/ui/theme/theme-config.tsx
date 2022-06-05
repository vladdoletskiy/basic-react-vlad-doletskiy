import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.blueGrey[900],
      light: colors.blueGrey[200],
    },
    secondary: {
      main: colors.grey[600],
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  },
});

theme.typography.h6 = {
  fontWeight: '500',
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};
