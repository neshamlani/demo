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
  margin-top:${({ heading }) => heading ? '0px' : '20px'};
`;

export const SubTitle = styled.div`
  font-family:${({ theme }) => theme.font};
  font-size:${({ theme }) => theme.fontSizes.medium};
  color:${({ theme }) => theme.color.description};
  font-weight:${({ theme }) => theme.fontWeight.medium};
  margin-top:10px;
`;

export const Description = styled.div`
  font-family:${({ theme }) => theme.font};
  font-size:${({ theme }) => theme.fontSizes.small};
  color:${({ theme }) => theme.color.description};
  font-weight:${({ theme }) => theme.fontWeight.light};
  margin-top:5px;
  white-space:break-spaces;
`;

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  background:${({ theme }) => theme.color.background};
  padding:30px 0 60px;
  animation-name:fade;
  animation-duration:1s;
  animation-timing-function:linear;

  @media(max-width:600px){
    padding:30px 10px 60px;
    justify-content:flex-start;
    min-height:75vh;
  }

  @keyframes fade{
    0%{
      opacity:0;
    }
    10%{
      opacity:0.1;
    }
    20%{
      opacity:0.2;
    }
    30%{
      opacity:0.3;
    }
    40%{
      opacity:0.4;
    }
    50%{
      opacity:0.5;
    }
    60%{
      opacity:0.6;
    }
    70%{
      opacity:0.7;
    }
    80%{
      opacity:0.8;
    }
    90%{
      opacity:0.9;
    }
    100%{
      opacity:1;
    }
  }
`;