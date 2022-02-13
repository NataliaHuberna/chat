import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

// eslint-disable-next-line no-undef
export const StyledSelectWrapper = styled.div<any>`
  margin-top: 30px;
  position: relative;
  select{
    width: 100%;
    height: 40px;
    border-radius: 2px;
    border: none;
    font-size: 18px;
    padding: 10px;
    color: ${COLORS.PRIMARY_SELECT_COLOR};
    background-color: ${COLORS.PRIMARY_INPUT_COLOR};
    box-shadow: 10px 10px 10px -10px ${COLORS.SHADOW};
  }
`;
