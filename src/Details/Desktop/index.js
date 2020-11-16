import React from 'react';
import useStyles from './styles';
import Profile from '../../Profile';
import Contact from '../../Contact';
import Education from '../../Education';
import Skills from '../../Skills';
import Certificates from '../../Certificates';
import Links from '../../Links';
const Desktop = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        <Profile />
        <Education />
        <Skills />
      </div>
      <div className={classes.rightWrapper}>
        <Contact />
        <Certificates />
        <Links />
      </div>
    </div>
  )
}

export default Desktop