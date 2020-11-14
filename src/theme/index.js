import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737'
    },
    secondary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF'
    }
  }
});

export default theme;