import React from 'react';
import useStyles from './styles';
import Profile from '../../Profile';
import Contact from '../../Contact';
import Education from '../../Education';

const Desktop = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        <Profile />
        <Education />
      </div>
      <div className={classes.rightWrapper}>
        <Contact />
      </div>
    </div>
  )
}

export default Desktop