import styled from 'styled-components';

// eslint-disable-next-line no-undef
export const StyledInput = styled.input<any>`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border: ${({ error }) => error ? '2px solid #dc1414' : 'none'};
  font-size: 18px;
  padding: 10px;
  color: #25291b;
  text-align: center;
  background-color: rgba(255, 255, 255, .5);
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.3);

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, .8)
  }
`;

export const StyledLabel = styled.label`
  display: block;
  text-align: left;
`;

export const StInputContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

// eslint-disable-next-line no-undef
export const StInputItem = styled.div<any>`
  display: flex;

  .test {
    width: 100%;
    border: ${({ error }) => error ? '2px solid #dc1414' : 'none'};
  }`;
export const StIcon = styled.div`
  width: 40px;
  display: grid;
  place-items: center;
  padding-left: 10px;
  color: lightgreen;
`;
export const StError = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  bottom: -1.3em;
  color: #dc1414;
`;
export const StSubmitInput = styled.input`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: none;
  background-color: rgba(47, 100, 90, 1);
  border-radius: 2px;
  text-align: center;
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.3);
 
  &:disabled{
    cursor: not-allowed;
  }
  &:hover {
    background-color: lightgreen;
  }
`;