import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Title,
  Description,
  SubTitle
} from '../Custom_Component';

const Education = () => {
  const details = [
    {
      title: 'Graduation',
      subTitle: `Marwadi University, Rajkot`,
      description: 'Bachelor In Computer Engineering.',
      duration: 'Duration of study: 2017 - 2021',
      grade: 'CGPA: 8.98',
    },
    {
      title: 'Student Exchange',
      subTitle: `University Of Pitesti, Romania`,
      description: `Completed my 3rd semester at University Of Pitesti.`,
      duration: `Duration Of Study:\nOctober 2018 - January 2019.`,
      grade: '',
    },
    {
      title: '12th Grade',
      subTitle: `Kendriya Vidyalaya INS Valsura,\nJamnagar`,
      description: 'CBSE Board.',
      duration: `Completion Year: 2017.`,
      grade: `Percentage: 73%.`,
    },
    {
      title: '10th Grade',
      subTitle: `Kendriya Vidyalaya INS Valsura,\nJamnagar`,
      description: 'CBSE Board.',
      duration: `Completion Year: 2015.`,
      grade: `CGPA: 8.5.`,
    }
  ];
  return (
    <EducationWrapper>
      { details.map(val =>
        <DetailsComponent
          title={val.title}
          subTitle={val.subTitle}
          description={val.description}
          duration={val.duration}
          grade={val.grade}
        />
      )}
    </EducationWrapper>
  )
};

const DetailsComponent = (props) => (
  <MainWrapper>
    <Title heading={1}>{props.title}</Title>
    <DetailsWrapper>
      <LeftWrapper>
        <SubTitle>{props.subTitle}</SubTitle>
        <Description>{props.description}</Description>
      </LeftWrapper>
      <RightWrapper>
        <Description>{props.duration}</Description>
        <Description>{props.grade}</Description>
      </RightWrapper>
    </DetailsWrapper>
  </MainWrapper>
);

const EducationWrapper = styled(Container)`
  width:70%;
  margin:auto;
  align-items:flex-start;
  text-align:left;
  @media(max-width:960px){
    width:80%;
  }
`;

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  white-space:break-spaces;
  margin-top:20px;
  &:first-child {
    margin-top:0;
  }
`;

const DetailsWrapper = styled.div`
  display:flex;
  @media(max-width:600px){
    flex-direction:column;
  }
`;

export const LeftWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:60%;
  @media(max-width:600px){
    width:100%;
  }
`;

export const RightWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
  @media(max-width:600px){
    width:100%;
  }
`;

export default Education;