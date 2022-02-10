import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

// eslint-disable-next-line no-undef
export const StDatepickerWrapper = styled.div<any>`
  margin-top: 30px;
  position: relative;
    input{
      width: 100%;
      height: 40px;
      border-radius: 2px;
      text-align: center;
      border: ${({error}) => error ? `2px solid ${COLORS.ERROR_COLOR}` : 'none'};
      font-size: 18px;
      padding: 10px;
      color: ${COLORS.PRIMARY_SELECT_COLOR};
      background-color: ${COLORS.PRIMARY_INPUT_COLOR};
      box-shadow: 10px 10px 10px -10px ${COLORS.SHADOW};
    }
`;
