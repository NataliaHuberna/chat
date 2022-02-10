import styled from 'styled-components';

// eslint-disable-next-line no-undef
export const StDatepickerWrapper = styled.div<any>`
  margin-top: 30px;
  position: relative;
    input{
      width: 100%;
      height: 40px;
      border-radius: 2px;
      text-align: center;
      border: ${({error}) => error ? '2px solid #dc1414' : 'none'};
      font-size: 18px;
      padding: 10px;
      color: #25291b;
      background-color: rgba(255, 255, 255, .5);
      box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.3);
    }
`;
