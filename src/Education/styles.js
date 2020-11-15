import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  educationWrapper: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  educationTitle: {
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold'
  },
  detailsWrapper: {
    fontFamily: theme.typography.fontFamily,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    }
  },
  clgDetails: {
    fontSize: 18
  },
  clgName: {
    fontSize: 20,
    textDecoration: 'underline'
  }
}));

export default useStyles;