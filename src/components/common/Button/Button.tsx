import React from 'react';
import { StyledButton } from './styled';

interface IButton {
    text: string,
    type: 'submit' | 'button',
    actionToDo: any,
}

const Button = ({text, type, actionToDo}: IButton) => (
    <StyledButton type={type} onClick={actionToDo}>{text}</StyledButton>
);

export default Button;
