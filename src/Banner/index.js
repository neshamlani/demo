import React from 'react';
import useStyles from './styles';
import me from '../assetes/me.jpg';

const Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.nameWrapper}>
        <img src={me} className={classes.imgs} />
        <div className={classes.textWrapper}>
          <div className={classes.name}>NESH AMLANI</div>
          <div className={classes.jd}>Web Developer</div>
        </div>
      </div>
    </div>
  )
};

export default Banner;