import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from './styles';
import { CERTIFICATE_REF } from '../refs';
import Spinner from '../Spinner';


const Certificate = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://portfolio-groot.firebaseio.com/certificate.json')
      .then(resp => {
        const response = [];
        for (let i in resp.data) {
          response.push(resp.data[i]);
        }
        setData(response);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err)
        setIsLoading(false);
      });
  }, []);
  console.log('data', data)
  return (
    <div className={classes.certificateWrapper} ref={CERTIFICATE_REF}>
      <div className={classes.certificateTitle}>Certificates</div>
      {
        isLoading
          ?
          <Spinner />
          :
          data.map(val =>
            <div className={classes.links}>
              <a href={val.link} target='_blank'>{val.name}</a>
            </div>
          )
      }
    </div>
  )
};

export default Certificate;