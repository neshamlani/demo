import React from 'react';
import styled from 'styled-components';
import web from '../assetes/website.png';
import {
  Container,
  Title,
  SubTitle,
  Description
} from '../Custom_Component';
import {
  LeftWrapper,
  RightWrapper
} from '../Education';

const Experience = () => {
  return (
    <Container>
      <MainWrapper>
        <LeftWrapper>
          <Link href='https://ciphernutz.com/' target='_blank'>
            <Title heading={1}>CipherNutz IT Services</Title>
          </Link>
          <SubTitle>9/2020 - Present</SubTitle>
          <Description>
            {
              `Reactjs FrontEnd Developer at CipherNutz IT Services.\nJoined the company at 14th September 2020.`
            }
          </Description>
        </LeftWrapper>
        <Right>
          <Link href='https://ciphernutz.com/' target='_blank'>
            <img src={web} width='100' height='100' />
          </Link>
        </Right>
      </MainWrapper>
    </Container>
  )
};

const MainWrapper = styled.div`
  display:flex;
  width:50%;
  text-align:left;
  margin:0 auto;
  white-space:break-spaces;

  @media(max-width:600px){
    width:90%;
  }

  @media(min-width:600px){
    width:70%;
  }

  @media(min-width:960px){
    width:60%;
  }
  @media(mix-width:1280px){
    width:50%;
  }
`;

const Right = styled(RightWrapper)`
  align-items:center;
  justify-content:center;

  @media(max-width:600px){
    display:none;
  }
`;

const Link = styled.a`
  text-decoration:none;
  &:hover{
    text-decoration:underline;
    text-decoration-color:${({ theme }) => theme.color.buttonBackground};
  }
`;

export default Experience;