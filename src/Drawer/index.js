import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      open={props.open}
      onClose={props.close}
    >
      <div className={classes.mainWrapper}>
        hello
      </div>
    </Drawer>
  )
}

export default SideBar;
