import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    backgroundColor: theme.palette.primary.dark,
    padding: '50px 20px 50px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  nameWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  imgs: {
    width: 200,
    height: 200,
    borderRadius: '50%'
  },
  textWrapper: {
    paddingLeft: 50,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingTop: 20,
    }
  },
  name: {
    fontFamily: 'monospace',
    fontSize: 64,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    }
  },
  jd: {
    fontFamily: 'monospace',
    fontSize: 32,
    color: theme.palette.text.primary,
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    }
  }
}));

export default useStyles