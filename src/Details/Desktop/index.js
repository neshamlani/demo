import React from 'react';
import useStyles from './styles';
import Profile from '../../Profile';
import Contact from '../../Contact';

const Desktop = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        <Contact />
      </div>
      <div className={classes.rightWrapper}>
        <Profile />
      </div>
    </div>
  )
}

export default Desktop