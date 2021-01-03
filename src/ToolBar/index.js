import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../Custom_Component';
import greater from '../assetes/greater.png';
import less from '../assetes/less.png';

const ToolBar = (props) => {
  const [steps, setSteps] = useState(['About Me', 'Experience', 'Education', 'Skills', 'Certificate']);
  const [progess, setProgess] = useState([20, 40, 60, 80, 100]);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 4) return;
    setCounter(counter + 1);
    props.set(counter + 1);
  }

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    props.set(counter - 1);
  }

  return (
    <Toolbar>
      <Img src={less} onClick={decrement} hide={counter === 0 ? 1 : 0} />
      <Heading>
        <Title heading={1}>{steps[counter]}</Title>
        <ProgessBar progess={progess[counter]} />
      </Heading>
      <Img src={greater} onClick={increment} hide={counter >= 4 ? 1 : 0} />
    </Toolbar>
  )
};

const Toolbar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px;
  background:transparent;
`;

const Img = styled.img`
  width:48px;
  height:48px;
  cursor:pointer;
  visibility:${({ hide }) => hide ? 'hidden' : 'visible'};
  &:hover{
    opacity:0.5;
  }
`;

const Heading = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  text-align:center;
`;

const ProgessBar = styled.div`
  background:${({ theme }) => theme.color.buttonBackground};
  height:2px;
  width:${({ progess }) => progess}%;
`;

export default ToolBar;