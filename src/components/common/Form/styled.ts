import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

export const StHeadLiner = styled.hr`
  border: 0;
  height: 1px;
  opacity: .3;
  margin-top: 35px;
  background-image: linear-gradient(
          to right,
          ${COLORS.HR_LIGHT},
          ${COLORS.HR_DARK},
          ${COLORS.HR_LIGHT});
`;
export const StForm = styled.form`
  display: block;
  padding: 45px;
  background-color: ${COLORS.PRIMARY_COLOR_LIGHT};
  text-align: center;
  width: 450px;
  margin: 0 auto;
  color: ${COLORS.WHITE};
`;
