import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

// eslint-disable-next-line no-undef
export const StyledInput = styled.input<any>`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border: ${({ error }) => error ? `2px solid ${COLORS.ERROR_COLOR}` : 'none'};
  font-size: 18px;
  padding: 10px;
  color: ${COLORS.PRIMARY_SELECT_COLOR};
  text-align: center;
  background-color: ${COLORS.PRIMARY_INPUT_COLOR};
  box-shadow: 10px 10px 10px -10px ${COLORS.SHADOW};

  &:focus {
    outline: none;
    background-color: ${COLORS.INPUT_FOCUS}
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
    border: ${({ error }) => error ? `2px solid ${COLORS.ERROR_COLOR}` : 'none'};
  }`;
export const StIcon = styled.div`
  width: 40px;
  display: grid;
  place-items: center;
  padding-left: 10px;
  cursor: pointer;
  color: ${COLORS.SEMI_PRIMARY_COLOR_SEC};
`;
export const StError = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  bottom: -1.3em;
  color: ${COLORS.ERROR_COLOR};
`;
export const StSubmitInput = styled.input`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: none;
  background-color: ${COLORS.PRIMARY_COLOR};
  border-radius: 2px;
  text-align: center;
  color: ${COLORS.WHITE};
  font-weight: bold;
  letter-spacing: 3px;
  box-shadow: 10px 10px 10px -10px ${COLORS.SHADOW};
 
  &:disabled{
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${COLORS.SEMI_PRIMARY_COLOR_SEC};
  }
`;
