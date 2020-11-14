import React from 'react';
import useStyles from './styles';
import Contact from '../../Contact';
import Profile from '../../Profile';
import Education from '../../Education'

const Mobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Profile />
      <Contact />
      <Education />
    </div>
  )
}

export default Mobile