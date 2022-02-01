import styled from 'styled-components';

export const StyledParagraph = styled.p`
  margin-top: 30px;
  font-size: 20px;
  & a{
    width: 120px;
    height: 31px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    margin-left: 17px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    padding: 2px;
    transition: all .4s ease-out;
  }
  & a:hover{
    color: rgb(0, 0, 0);
    border: 1px solid rgb(0, 0, 0);
  }
`;
export const StyledParagraphSignOut = styled.p`
  font-size: 12px;
  margin-top: 30px;
  padding-right: 5px;
  padding-left: 5px;
  & a{
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    margin-left: 17px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    padding: 2px;
    transition: all .4s ease-out;
  }
  & a:hover{
    color: rgb(0, 0, 0);
    border: 1px solid rgb(0, 0, 0);
  }
`;
