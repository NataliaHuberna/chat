import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

export const StyledParagraph = styled.p`
  margin-top: 30px;
  font-size: 20px;
  & a{
    width: 120px;
    height: 31px;
    color: ${COLORS.SEMI_PRIMARY_COLOR_SEC};
    text-decoration: none;
    margin-left: 17px;
    border: 1px solid ${COLORS.SEMI_PRIMARY_COLOR_SEC};
    border-radius: 2px;
    padding: 4px 10px;
    transition: all .4s ease-out;
  }
  & a:hover{
    color: ${COLORS.HOVER_COLOR_PARAGRAPH};
    border: 1px solid ${COLORS.HOVER_COLOR_PARAGRAPH};
  }
`;
export const StyledParagraphSignOut = styled.p`
  margin-top: 30px;
  & a{
    color: ${COLORS.SEMI_PRIMARY_COLOR_SEC};
    text-decoration: none;
    margin-left: 17px;
    border: 1px solid ${COLORS.SEMI_PRIMARY_COLOR_SEC};
    border-radius: 2px;
    padding: 2px;
    transition: all .4s ease-out;
  }
  & a:hover{
    color: ${COLORS.HOVER_COLOR_PARAGRAPH};
    border: 1px solid ${COLORS.HOVER_COLOR_PARAGRAPH};
  }
`;
