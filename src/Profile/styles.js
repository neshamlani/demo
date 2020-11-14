import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  profileWrapper: {
    padding: '20px 20px 0px'
  },
  profileTitle: {
    fontSize: 24,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  profileDiscription: {
    paddingLeft: 20,
    whiteSpace: 'break-spaces',
    fontSize: 18,
    marginTop: 10
  }
}));

export default useStyles;