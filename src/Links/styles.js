import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  linksWrapper: {
    marginTop: 20,
  },
  linksTitle: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary
  },
  links: {
    marginTop: 10,
    paddingLeft: 20,
    '& a': {
      textDecoration: 'underline',
      color: theme.palette.text.primary,
      fontSize: 18,
      fontFamily: theme.typography.fontFamily,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  }
}));

export default useStyles;