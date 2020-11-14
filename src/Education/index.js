import React from 'react';
import useStyles from './styles';
import {EDUCATION_REF} from '../refs'

const Education = () => {
  const classes = useStyles();

  return (
    <div className={classes.educationWrapper} ref={EDUCATION_REF}>
      <div className={classes.educationTitle}>Education</div>

      <div className={classes.detailsWrapper}>
        <div className={classes.clgDetails}>
          <span className={classes.clgName}>Marwadi University</span>
              ,
              <span>Rajkot</span>
              -
              <span>Bachelor In Computer Engineering</span>.
            </div>
        <div className={classes.clgDetails}>Duration Of Study: 2017-2021.</div>
        <div className={classes.clgDetails}>CGPA:8.98.</div>
      </div>

      <div className={classes.detailsWrapper}>
        <div className={classes.clgDetails}>
          <span className={classes.clgName}>University Of Pitesti</span>
              ,
              <span>Romania</span>
              -
              <span>Bachelor In Computer Engineering</span>.
            </div>
        <div className={classes.clgDetails}>Duration Of Study: October 2018 - January 2019.</div>
        <div className={classes.clgDetails}>3rd Semester completed at University Of Pitesti. By the help of a student exchange program known as ERASMUS+.</div>
      </div>
      <div className={classes.detailsWrapper}>
        <div className={classes.clgDetails}>
          <span className={classes.clgName}>Kendriya Vidyalaya INS Valsura</span>
              ,
              <span>Jamnagar</span>
              -
              <span>12th Grade</span>.
            </div>
        <div className={classes.clgDetails}>Completion Year: 2017.</div>
        <div className={classes.clgDetails}>Percentage: 73%.</div>
      </div>
      <div className={classes.detailsWrapper}>
        <div className={classes.clgDetails}>
          <span className={classes.clgName}>Kendriya Vidyalaya INS Valsura</span>
              ,
              <span>Jamnagar</span>
              -
              <span>10th Grade</span>.
            </div>
        <div className={classes.clgDetails}>Completion Year: 2015.</div>
        <div className={classes.clgDetails}>CGPA: 8.5.</div>
      </div>
    </div>
  )
};

export default Education;