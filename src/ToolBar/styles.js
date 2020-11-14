import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },
  btn: {
    boxShadow: 'none',
    fontFamily: theme.typography.fontFamily,
    fontSize: 18,
    fontWeight: 'bold'
  }
}));

export default useStyles