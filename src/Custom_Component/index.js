import styled from 'styled-components';

export const Button = styled.button`
  background:${({ theme }) => theme.color.buttonBackground};
  color:${({ theme }) => theme.color.background};
  font-family:${({ theme }) => theme.font};
  font-weight:${({ theme }) => theme.fontWeight.medium};
  font-size:${({ theme }) => theme.fontSizes.medium};
  padding:5px 10px;
  border:0;
  border-radius:5px;
  outline:none;
`;

export const Title = styled.div`
  font-family:${({ theme }) => theme.font};
  font-size:${({ theme }) => theme.fontSizes.large};
  color:${({ theme }) => theme.color.title};
  font-weight:${({ theme }) => theme.fontWeight.strong};
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
`;