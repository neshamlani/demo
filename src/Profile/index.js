import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROFILE_REF } from '../refs';
import Spinner from '../Spinner'
import useStyles from './styles';

const Profile = () => {
  const [objective, setObjective] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://portfolio-groot.firebaseio.com/profile.json')
      .then(resp => {
        setObjective(resp.data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      })
  }, [])

  const classes = useStyles();
  return (
    <div ref={PROFILE_REF}>
      <div className={classes.profileTitle}>Objective</div>
      <div className={classes.profileDiscription}>
        {
          isLoading
            ?
            <Spinner />
            :
            objective
        }
      </div>
    </div>
  )
};

export default Profile