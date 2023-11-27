import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';
import Router from './Router';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  typography: {
    fontFamily: ['Lato'].join(','),
    h1: {
      fontSize: 50,
      fontWeight: 600,
      lineHeight: '61px'
    },
    h2: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: '43.2px',
      textAlign: 'left'
    },
    h3: {
      fontSize: 30,
      fontWeight: 600,
      lineHeight: '36.6px',
      color: '#2D6FF6',
      width: '550px'
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '21.96px',
      width: '795px'
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '24.32px',
      color: '#8A8A8A'
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #CCCFD6'
        },
        '&:hover:not($disabled):before': {
          borderBottom: '1px solid #CCCFD6'
        }
      },
      root: {
        fontFamily: 'Lato',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '24px'
      },
      inputTypeSearch: {
        fontFamily: 'Lato',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#8A8A8A'
      }
    },
    MuiFormHelperText: {
      root: {
        color: '#7f0000',
        fontSize: '13px'
      }
    },
    MuiLink: {
      root: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '24.32px',
        width: '400px',
        textDecoration: 'none',
        color: 'black'
      }
    }
  }
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
