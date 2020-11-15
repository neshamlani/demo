import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    }
  },
  toolBarMobile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '100vh',
  },
  btn: {
    boxShadow: 'none',
    fontFamily: theme.typography.fontFamily,
    fontSize: 18,
    fontWeight: 'bold'
  }
}));

export default useStyles