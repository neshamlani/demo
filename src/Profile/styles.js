import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  profileTitle: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold'
  },
  profileDiscription: {
    paddingLeft: 20,
    whiteSpace: 'break-spaces',
    fontSize: 18,
    fontFamily: theme.typography.fontFamily,
    marginTop: 10,
    [theme.breakpoints.down('xs')]:{
      padding: '0'
    }
  }
}));

export default useStyles;