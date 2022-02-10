import React from 'react';
import { ReactComponent as HelpIcon } from "../../../icons/help.svg";
import { StError, StIcon, StInputContainer, StInputItem, StyledInput, StyledLabel } from './styled';

// @ts-ignore
const Input = ({onChange,error, hintText, text, name}: any) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return (
        <StInputContainer>
            <StyledLabel>{text}</StyledLabel>
            <StInputItem>
                <StyledInput type={name} onChange={handleChange} error={error}/>
                <StIcon>
                    <HelpIcon title={hintText || null}/>
                </StIcon>
            </StInputItem>
            {error && <StError>{error}</StError>}
        </StInputContainer>
    );
};

export default Input;
