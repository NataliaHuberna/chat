import styled from 'styled-components';

export const StyledSignIn = styled.div`
  opacity: 1;
  visibility: visible;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  margin-top: -230px;
  margin-left: -210px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(255, 255, 255, .3);
  height: 440px;
  width: 400px;
  color: white;
  text-align: center;
  border-radius: 2px;
  -webkit-box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.25);
  transition: opacity .3s ease-in .3s,
  visibility .3s ease-in .3s;
  transform: scale(.9);
`;
