import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737'
    },
    secondary: {
      main: '#48494B',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000'
    }
  }
});

export default theme;