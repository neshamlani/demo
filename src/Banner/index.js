import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import axios from 'axios';
import Spinner from '../Spinner';

const Banner = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://portfolio-groot.firebaseio.com/photo.json')
      .then(resp => {
        setUrl(resp.data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.nameWrapper}>
        {
          isLoading
            ?
            <Spinner />
            :
            <img src={url} className={classes.imgs} />
        }
        <div className={classes.textWrapper}>
          <div className={classes.name}>NESH AMLANI</div>
          <div className={classes.jd}>Web Developer</div>
        </div>
      </div>
    </div>
  )
};

export default Banner;