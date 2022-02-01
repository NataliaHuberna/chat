import React from 'react';
import { StyledDivInput, StyledInput, StyledLabel } from './styled';

interface Label {
    label: string,
    type: string,
    validated: string,
    validateField: any,
}

const Input = ({label, type, validated, validateField}: Label) => (
    <StyledDivInput>
        <StyledLabel>{label}
            <i
                className={validated
                    ? "fa fa-check animate-check"
                    : ""}
                aria-hidden="true"
            />
        </StyledLabel>
        <StyledInput type={type} onBlur={validateField}/>
    </StyledDivInput>
);

export default Input;
