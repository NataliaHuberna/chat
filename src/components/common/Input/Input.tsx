import React from 'react';
import { ReactComponent as HelpIcon } from "../../../icons/help.svg";
import { StError, StIcon, StInputContainer, StInputItem, StyledInput, StyledLabel } from './styled';

type TProps = {
    onChange: (value: string) => void,
    error: string | null,
    hintText: string,
    text: string,
    name?: string
}

const Input: React.FC<TProps> = ({onChange, error, hintText, text, name}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return (
        <StInputContainer>
            <StyledLabel>{text}</StyledLabel>
            <StInputItem>
                <StyledInput type={name} onChange={handleChange} error={error}/>
                <StIcon>
                    <HelpIcon title={hintText}/>
                </StIcon>
            </StInputItem>
            {error && <StError>{error}</StError>}
        </StInputContainer>
    );
};

export default Input;
