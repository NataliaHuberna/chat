import styled from 'styled-components';

export const StyledParagraph = styled.p`
  margin-top: 30px;
  font-size: 20px;
  & a{
    width: 120px;
    height: 31px;
    color: lightgreen;
    text-decoration: none;
    margin-left: 17px;
    border: 1px solid lightgreen;
    border-radius: 2px;
    padding: 4px 10px;
    transition: all .4s ease-out;
  }
  & a:hover{
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.7);
  }
`;
export const StyledParagraphSignOut = styled.p`
  margin-top: 30px;
  & a{
    color: lightgreen;
    text-decoration: none;
    margin-left: 17px;
    border: 1px solid lightgreen;
    border-radius: 2px;
    padding: 2px;
    transition: all .4s ease-out;
  }
  & a:hover{
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.7);
  }
`;
