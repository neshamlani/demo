import React from 'react';
import Drawer from '@material-ui/core/SwipeableDrawer';
import ToolBar from '../ToolBar'
import useStyles from './styles';

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      open={props.open}
      onClose={props.toggle}
      swipeAreaWidth={200}
      onOpen={props.toggle}
    >
      <div className={classes.mainWrapper}>
        <ToolBar toggle={props.toggle} mobile />
      </div>
    </Drawer>
  )
}

export default SideBar;
