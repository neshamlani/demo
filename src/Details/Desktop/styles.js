import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainWrapper: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
    }
  },
  leftWrapper: {
    width: '60vw',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  rightWrapper: {
    width: '40vw',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  }
}));

export default useStyles;