import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Spinner from '../Spinner';
import { SKILLS_REF } from '../refs'

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://portfolio-groot.firebaseio.com/skills.json')
      .then(resp => {
        let data = resp.data.split(',');
        setSkills(data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      })
  }, [])
  return (
    <div className={classes.mainWrapper} ref={SKILLS_REF}>
      <div className={classes.title}>Skills</div>
      <Grid
        container
        justify='flex-start'
        wrap='wrap'
        spacing='4'
        className={classes.gridContainer}>
        {
          isLoading
            ?
            <Spinner />
            :
            skills.map(val =>
              <Grid item>
                <div>{val}</div>
              </Grid>
            )
        }
      </Grid>
    </div>
  )
};

export default Skills;
