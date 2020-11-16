import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from './styles';
import Spinner from '../Spinner';
import { LINKS_REF } from '../refs'

const Links = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://portfolio-groot.firebaseio.com/links.json')
      .then(resp => {
        let update = [];
        for (let i in resp.data) {
          update.push({
            key: i,
            value: resp.data[i]
          })
        }
        setData(update);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      })
  }, []);
  return (
    <div className={classes.linksWrapper} ref={LINKS_REF}>
      <div className={classes.linksTitle}>Links</div>
      {
        isLoading
          ?
          <Spinner />
          :
          data.map(val =>
            <div className={classes.links}>
              <a href={val.value} target='_blank'>{val.key}</a>
            </div>
          )
      }
    </div>
  )
};

export default Links;