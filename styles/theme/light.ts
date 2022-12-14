import { DefaultTheme } from 'styled-components';

// font-family: 'Inter', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'The Nautigal', cursive;

const theme: DefaultTheme = {
  title: 'light',

  typography: {
    font: {
      primary: "'Poppins', Arial, sans-serif",
      heading: '',
    },
    size: {
      xxl: '6rem',
      xl: '4rem',
      lg: '2rem',
      medium: '1.5rem',
      base: '1rem',
      sm: '0.9rem',
      xs: '0.75',
    },
    weight: {
      light: 200,
      normal: 400,
      bold: 700,
      xbold: 900,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.1,
    },
  },

  mediaQuery: {
    xs: 'screen and (min-width: 320px)',
    sm: 'screen and (min-width: 480px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
  },

  color: {
    blue: {
      900: '#03045E',
    },
    green: {
      300: '#80E376',
    },
    pink: {
      700: '#E94560',
    },
    light: {
      100: '#ffffff;',
      200: '#E7E7E7',
      800: '#6B6C7B',
    },
    dark: {
      900: '#000',
    },
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '6rem',
    xxxl: '8rem',
  },
};

export default theme;
