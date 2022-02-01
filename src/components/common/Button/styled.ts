import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 310px;
  height: 50px;
  font-size: 20px;
  border: none;
  background-color: rgba(0,0,0,.6);
  border-radius: 2px;
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
  transition: background-color .4s ease-out;
  &:hover{
    background-color: rgba(0,0,0,.7);
  }
  &:focus {
    outline: none;
    background-color: rgba(0,0,0,.7);
  }
`;
