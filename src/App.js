import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ToolBar from './ToolBar';
import Footer from './Footer';
import About from './AboutMe';
import Experience from './Experience';
import Education from './Education';

const App = () => {
  const [step, setStep] = useState(1);
  let dynamicComponent;
  switch (step) {
    case 1:
      dynamicComponent = <About />
      break;
    case 2:
      dynamicComponent = <Experience />
      break;
    case 3:
      dynamicComponent = <Education />
      break;
    default:
      dynamicComponent = <About />
      break;
  }


  return (
    <Div>
      <ToolBar set={setStep} />
      {dynamicComponent}
      <Footer />
    </Div>
  )
}

const Div = styled.div`
  height:100vh;
  background:${({ theme }) => theme.color.background};
`;

export default App;