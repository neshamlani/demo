import styled from 'styled-components';

export const Button = styled.button`
  background:${({ theme }) => theme.color.buttonBackground};
  color:${({ theme }) => theme.color.background};
  font-family:${({ theme }) => theme.font};
  font-weight:${({ theme }) => theme.fontWeight.medium};
  font-size:${({ theme }) => theme.fontSizes.medium};
  padding:5px 10px;
  border:2px solid ${({ theme }) => theme.color.buttonBackground};;
  border-radius:5px;
  outline:none;

  &:hover{
    background:${({ theme }) => theme.color.background};
    color:${({ theme }) => theme.color.buttonBackground};
  }
`;

export const Title = styled.div`
  font-family:${({ theme }) => theme.font};
  font-size:${({ theme }) => theme.fontSizes.large};
  color:${({ theme }) => theme.color.title};
  font-weight:${({ theme }) => theme.fontWeight.strong};
  margin-top:30px;
`;

export const SubTitle = styled.div`
  font-family:${({ theme }) => theme.font};
  font-size:${({ theme }) => theme.fontSizes.medium};
  color:${({ theme }) => theme.color.description};
  font-weight:${({ theme }) => theme.fontWeight.medium};
  margin-top:30px;
`;

export const Description = styled.div`
  font-family:${({ theme }) => theme.font};
  font-size:${({ theme }) => theme.fontSizes.small};
  color:${({ theme }) => theme.color.description};
  font-weight:${({ theme }) => theme.fontWeight.light};
  margin-top:10px;
  white-space:break-spaces;
`;

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  background:${({ theme }) => theme.color.background};
  padding:30px 0;
  animation-name:slide;
  animation-duration:0.75s;
  animation-timing-function:linear;

  @keyframes slide{
    0%{
      transform:translateX(-1000px);
      opacity:0;
    }
    10%{
      transform:translateX(-900px);
      opacity:0.1;
    }
    20%{
      transform:translateX(-800px);
      opacity:0.2;
    }
    30%{
      transform:translateX(-700px);
      opacity:0.3;
    }
    40%{
      transform:translateX(-600px);
      opacity:0.4;
    }
    50%{
      transform:translateX(-500px);
      opactiy:0.5;
    }
    60%{
      transform:translateX(-400px);
      opacity:0.6;
    }
    70%{
      transform:translateX(-300px);
      opacity:0.7;
    }
    80%{
      transform:translateX(-200px);
      opacity:0.8;
    }
    90%{
      transform:translateX(-100px);
      opacity:0.9;
    }
    100%{
      transform:none;
      opacity:1;
    }
  }
`;