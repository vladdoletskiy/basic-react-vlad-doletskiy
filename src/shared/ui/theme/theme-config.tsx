import { createTheme } from '@mui/material/styles';

export const theme = createTheme();

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
