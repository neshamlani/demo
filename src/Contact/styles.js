import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contactWrapper:{
    padding:'20px 20px 0'
  },
  contactTitle: {
    fontSize: 22,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  tableCell: {
    fontSize: 18,
  }
}));

export default useStyles;