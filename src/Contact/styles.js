import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  contactTitle: {
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0 0',
    }
  },
  tableWrapper: {
    paddingLeft: 20,
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    }
  },
  tableCell: {
    fontSize: 18,
    fontFamily: theme.typography.fontFamily,
  }
}));

export default useStyles;