import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainWrapper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 'bold'
  },
  gridContainer: {
    padding: '20px 0px 0px 20px',
    [theme.breakpoints.down('xs')]:{
      padding:'20px 0 0'
    }
  }
}));

export default useStyles;