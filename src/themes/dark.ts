import { createMuiTheme } from '@material-ui/core/styles';

export const themeDark = createMuiTheme({
   palette: {
      type: 'light',
      primary: {
         main: '#3d50fa',
         contrastText: '#ffffff',
      },
      secondary: {
         main: '#2c2d32',
         contrastText: '#ffffff',
      },
      background: {
         default: '#1f2026',
      },
      text: {
         primary: '#ffffff',
         secondary: '#595a5e',
      },
   },
   typography: {
      fontFamily: 'Inter',
   },
   overrides: {
      MuiCssBaseline: {
         '@global': {
            '*::-webkit-scrollbar': {
               minWidth: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
               backgroundColor: 'red',
            },
            '*:hover': {
               '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#36373c',
               },
            },
            '*:hover::-webkit-scrollbar-thumb': {
               backgroundColor: '#36373c',
            },
         },
      },
   },
});
