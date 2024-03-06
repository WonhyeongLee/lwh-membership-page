import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  color: {
    primary: null,
    accent: null,
    secondary: null,
    tertiary: null,
    quaternary: null,
  },
  fontSize: {
    text: null,
    title: null,
    subtitle: null,
    button: null,
    smallText: null,
  },
  lineHeight: {
    text: null,
    title: null,
    subtitle: null,
    button: null,
    smallText: null,
  },
});

export const baseTheme = createGlobalTheme(':root', {
  color: {
    background: '#FFFFFF',
    border: '#DDDDDD',
    contentBackground: '#FAFAFA',
    hover: '#F2F2F2',
    accent: '#007BFF',
  },
  fontSize: {
    text: '1rem',
    title: '2rem',
    subtitle: '1.5rem',
    button: '0.9375rem',
    smallText: '0.8125rem',
  },
  lineHeight: {
    text: '1.5',
    title: '1.3',
    subtitle: '1.4',
    button: '1',
    smallText: '1.2',
  },
});

export const darkTheme = createTheme(themeContract, {
  color: {
    primary: '#2E2E2E',
    accent: '#5A5A5A',
    secondary: '#434343',
    tertiary: '#1C1C1C',
    quaternary: '#333333',
  },
  fontSize: {
    text: '1rem',
    title: '2rem',
    subtitle: '1.5rem',
    button: '0.9375rem',
    smallText: '0.8125rem',
  },
  lineHeight: {
    text: '1.5',
    title: '1.3',
    subtitle: '1.4',
    button: '1',
    smallText: '1.2',
  },
});
