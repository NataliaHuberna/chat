import styled from 'styled-components';

export const StyledDivInput = styled.div`
  margin: 20px;
  margin-left: 50px;
  text-align: left;
  animation: pulse .7s 1;
  @keyframes pulse {
    0% { transform: scale(.8); }
    40% { transform: scale(1.2); }
    70% { transform: scale(1); }
    90% { transform: scale(1.01); }
    100%{ transform: scale(1); }
  }

  @keyframes pulse2 {
    0% { transform: scale(.1); opacity: 0;}
    50% { transform: scale(1.4); opacity: 1;}
    100% { transform: scale(1); }
  }
`;

export const StyledInput = styled.input`
  margin: 5px;
  width: 300px;
  margin-left: -5px;
  height: 40px;
  border-radius: 2px;
  border: none;
  font-size: 18px;
  padding: 5px;
  color: #25291b;
  background-color: rgba(255,255,255, .5);
  -webkit-box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.3);
  transition: background-color .4s ease-out;
  &:focus{
    outline: none;
    background-color: rgba(255,255,255, .8)
  }
`;

export const StyledLabel = styled.label`
  font-weight: lighter;
  margin-left: -5px;
`;
