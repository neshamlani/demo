import React from 'react';
import styled from 'styled-components';
import github from '../assetes/github.png';
import linkedin from '../assetes/linkedin.png';
import twitter from '../assetes/twitter.png';
import discord from '../assetes/discord.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <Link href='https://www.github.com/neshamlani' target='_blank'>
        <Img src={github} />
      </Link>
      <Link href='https://www.linkedin.com/in/neshamlani1970' target='_blank'>
        <Img src={linkedin} />
      </Link>
      <Link href='https://www.twitter.com/groot_1970' target='_blank'>
        <Img src={twitter} />
      </Link>
      <Link href='https://www.discord.com/users/710425727149015071' target='_blank'>
        <Img src={discord} />
      </Link>
    </FooterWrapper>
  )
};

const FooterWrapper = styled.div`
  position:fixed;
  bottom:0;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
  background:${({ theme }) => theme.color.background};
  border-top:1px solid ${({ theme }) => theme.color.description};
  width:100vw;
`;

const Link = styled.a`
  padding:0;
  background:transparent;
  margin:0 10px;
`;

const Img = styled.img`
  width:28px;
  height:28px;
  transition-property:width height;
  transition-duration:0.2s;
  transition-timing-function:linear;
  &:hover{
    width:40px;
    height:40px;
  }
`;

export default Footer;