import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Title,
  Description,
  SubTitle
} from '../Custom_Component';
import profile from '../assetes/me.jpg';

const About = () => {
  const desp = `Currently in 8th Sem Computer Engineering.
  FrontEnd Developer and want to contribute to open source.
  Have a working knowledge of linux.`;
  return (
    <Container>
      <Img src={profile} alt='Photo' />
      <Title>Nesh Amlani</Title>
      <SubTitle>ReactJS Developer at CipherNutz IT Services</SubTitle>
      <Description>{desp}</Description>
    </Container>
  )
};

const Img = styled.img`
  width:250px;
  height:250px;
  border-radius:50%;
`;

export default About;