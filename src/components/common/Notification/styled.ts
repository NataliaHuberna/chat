import styled, {keyframes} from "styled-components";
import {COLORS} from "../../../constants/colors";

const fadeIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// eslint-disable-next-line no-undef
export const StNotification = styled.div<any>`
  background: ${({isSuccess}) => isSuccess ? `${COLORS.PRIMARY_INPUT_COLOR}` : `${COLORS.ERROR_COLOR}`};
  text-align: center;
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid ${COLORS.SHADOW};
  padding: 5px;
  height: 50px;
  width: 400px;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 0 10px 14px -7px ${COLORS.SHADOW}; 
  display: flex;
  align-items: center;
  justify-content: center;
  //background: url("../../../icons/cloudFull.svg") center/cover no-repeat;

  transform: translateY(-10px);
  opacity: 0;
  animation: ${fadeIn} .5s ease-in-out forwards;
`;
