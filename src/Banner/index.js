import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import axios from 'axios';

const Banner = () => {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  useEffect(() => {
    axios.get('https://portfolio-groot.firebaseio.com/photo.json')
      .then(resp => {
        setUrl(resp.data);
      })
      .catch(err => alert(err));
  }, []);
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.nameWrapper}>
        <img src={url} className={classes.imgs} />
        <div className={classes.textWrapper}>
          <div className={classes.name}>NESH AMLANI</div>
          <div className={classes.jd}>Web Developer</div>
        </div>
      </div>
    </div>
  )
};

export default Banner;