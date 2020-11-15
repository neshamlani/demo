import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MediaQuery from 'react-responsive';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import {
  handleProfileRef,
  handleContactRef,
  handleEducationRef,
  handleSkillRef
} from '../refs';


const Toolbar = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <MediaQuery maxWidth={600}>
        {
          props.mobile
            ?
            <AppBar position='static'>
              <ToolBar className={classes.toolBarMobile}>
                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                  onClick={() => {
                    handleProfileRef()
                    props.toggle()
                  }}
                >
                  Objective</Button>

                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                >
                  Experience</Button>

                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                  onClick={() => {
                    handleEducationRef()
                    props.toggle()
                  }}
                >
                  Education</Button>

                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                  onClick={() => {
                    handleSkillRef();
                    props.toggle();
                  }}
                >
                  Skills</Button>

                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                >
                  Certificates</Button>

                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                  onClick={() => {
                    handleContactRef()
                    props.toggle()
                  }}
                >
                  Contact</Button>

                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                >
                  Links</Button>

              </ToolBar>
            </AppBar>
            :
            <AppBar position='static'>
              <ToolBar className={classes.toolBar}>
                <Button
                  variant='contained'
                  className={classes.btn}
                  startIcon={<MenuRoundedIcon />}
                  color='primary'
                  onClick={props.open}>Menu</Button>
              </ToolBar>
            </AppBar>
        }
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <AppBar position='static'>
          <ToolBar className={classes.toolBar}>
            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
              onClick={handleProfileRef}
            >
              Objective</Button>

            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
            >
              Experience</Button>

            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
              onClick={handleEducationRef}
            >
              Education</Button>

            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
              onClick={handleSkillRef}
            >
              Skills</Button>

            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
            >
              Certificates</Button>

            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
              onClick={handleContactRef}
            >
              Contact</Button>

            <Button
              variant='contained'
              className={classes.btn}
              color='primary'
            >
              Links</Button>

          </ToolBar>
        </AppBar>
      </MediaQuery>
    </Fragment>
  )
}

export default Toolbar