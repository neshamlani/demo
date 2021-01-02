import React from 'react';
import styled from 'styled-components';
import { Button } from '../Custom_Component';

const ToolBar = (props) => {
  return (
    <Toolbar>
      <Button onClick={() => props.set(1)}>About Me</Button>
      <Button onClick={() => props.set(2)}>Experience</Button>
      <Button onClick={() => props.set(3)}>Education</Button>
      <Button onClick={() => props.set(4)}>Skills</Button>
      <Button onClick={() => props.set(5)}>Certificate</Button>
    </Toolbar>
  )
};

const Toolbar = styled.div`
  display:flex;
  justify-content:space-evenly;
  padding:10px;
  background:transparent;
  border-bottom:1px solid ${({ theme }) => theme.color.description};
`;

export default ToolBar;