import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Description,
  SubTitle
} from '../Custom_Component';
import css from '../assetes/css.png';
import firebase from '../assetes/firebase.png';
import html from '../assetes/html.png';
import java from '../assetes/java.png';
import js from '../assetes/js.png';
import reactjs from '../assetes/reactjs.png';
import { LeftWrapper, RightWrapper } from '../Education';

const Skills = () => {
  const imgs = [
    {
      src: reactjs,
      title: `ReactJs`,
      description: `A JavaScript library for building user interfaces.`
    },
    {
      src: firebase,
      title: `Firebase`,
      description: `Firebase gives you the tools to develop high-quality apps.`
    },
    {
      src: js,
      title: `JavaScript`,
      description: `JavaScript (JS) is a lightweight, interpreted,\nprogramming language.`
    },
    {
      src: html,
      title: `HTML`,
      description: `Hypertext Markup Language`
    },
    {
      src: css,
      title: `CSS`,
      description: `Cascading Style Sheets`
    },
    {
      src: java,
      title: `Java`,
      description: `Java is a class-based, object-oriented\nprogramming language.`
    }
  ];
  return (
    <SkillWrapper>
      {
        imgs.map(val =>
          <RenderSkillComponent
            src={val.src}
            title={val.title}
            description={val.description}
          />
        )
      }
    </SkillWrapper>
  )
};

const RenderSkillComponent = (props) => (
  <MainWrapper>
    <Img src={props.src} alt='skills' />
    <SubTitle>{props.title}</SubTitle>
    <Description>{props.description}</Description>
  </MainWrapper>
);

const SkillWrapper = styled(Container)`
  width:80%;
  margin:auto;
  flex-direction:row;
  flex-wrap:wrap;
  @media(max-width:600px){
    flex-direction:row;
  }
`;

const MainWrapper = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-bottom:20px;
  @media(max-width:600px){
    width:100%;
  }
`;

const Img = styled.img`
  width:150px;
  height:150px;
`;

export default Skills;