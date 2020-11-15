import React from 'react';
import useStyles from './styles';
import Contact from '../../Contact';
import Profile from '../../Profile';
import Education from '../../Education'
import Skills from '../../Skills';

const Mobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Profile />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default Mobile