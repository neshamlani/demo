import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: '80vw',
    height: '100vh',
    backgroundColor: theme.palette.primary.light
  }
}));

export default useStyles;