import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: 'auto',
    height: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between'
  },
  btn: {
    boxShadow: 'none'
  }
}));

export default useStyles;