import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainWrapper: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    flexDirection: 'column',
    margin: 'auto',
    padding: 20,
  },
}));

export default useStyles;