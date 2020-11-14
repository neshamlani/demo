import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {PROFILE_REF} from '../refs'
import useStyles from './styles';

const Profile = () => {
  const [objective, setObjective] = useState('');
  useEffect(() => {
    axios.get('https://portfolio-groot.firebaseio.com/profile.json')
      .then(resp => {
        setObjective(resp.data)
      })
      .catch(err => alert(err))
  }, [])

  const classes = useStyles();
  return (
    <div className={classes.profileWrapper} ref={PROFILE_REF}>
      <div className={classes.profileTitle}>Profile</div>
      <div className={classes.profileDiscription}>{objective}</div>
    </div>
  )
};

export default Profile