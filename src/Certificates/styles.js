import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  certificateWrapper: {
    marginTop: 20,
  },
  certificateTitle: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold
  },
  links: {
    marginTop: 10,
    '& a': {
      textDecoration: 'underline',
      color: theme.palette.text.primary,
      fontSize: 18,
      fontFamily: theme.typography.fontFamily,
      paddingLeft: 20,
      [theme.breakpoints.down('xs')]: {
        padding: 0
      }
    }
  }
}));

export default useStyles;