'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#cddf52',
    },
    secondary: {
      main: '#1b1a16',
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    }
  },
  shape: {
    borderRadius: 8,
  }
});

export default theme;
