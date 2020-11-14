import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Drawer from '../../Drawer';
import useStyles from './styles';

const Mobile = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Fragment>
      <AppBar position='static'>
        <ToolBar className={classes.toolBar}>
          <Button
            variant='contained'
            startIcon={<MenuRoundedIcon />}
            color='primary'
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}>Menu</Button>
        </ToolBar>
      </AppBar>
      <Drawer open={isDrawerOpen} close={() => setIsDrawerOpen(!isDrawerOpen)} />
    </Fragment>
  )
};

export default Mobile