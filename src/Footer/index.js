import React from 'react';
import styled from 'styled-components';
import github from '../assetes/github.png';
import linkedin from '../assetes/linkedin.png';
import twitter from '../assetes/twitter.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <Link href='https://www.github.com/neshamlani' target='_blank'>
        <img src={github} width='32' height='32' />
      </Link>
      <Link href='https://www.linkedin.com/in/neshamlani1970' target='_blank'>
        <img src={linkedin} width='32' height='32' />
      </Link>
      <Link href='https://www.twitter.com/groot_1970' target='_blank'>
        <img src={twitter} width='32' height='32' />
      </Link>
    </FooterWrapper>
  )
};

const FooterWrapper = styled.div`
  position:fixed;
  bottom:0;
  display:flex;
  justify-content:center;
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

export default Footer;