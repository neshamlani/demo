import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const Desktop = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <ToolBar className={classes.toolBar}>
        <Button
          variant='contained'
          color='primary'>About</Button>
      </ToolBar>
    </AppBar>
  )
};

export default Desktop