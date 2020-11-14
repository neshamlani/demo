import React from 'react';
import useStyles from './styles';
import Contact from '../../Contact';
import Profile from '../../Profile';

const Mobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Contact />
      <Profile />
    </div>
  )
}

export default Mobile