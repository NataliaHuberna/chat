import React from 'react';
import Select from 'react-select';
import { ReactComponent as HelpIcon } from '../../../icons/help.svg';
import { StyledSelectWrapper } from './styled';
import { StIcon, StyledLabel, StInputItem, StError } from '../Input/styled';

type TOption = {
    value: string,
    label: string
}

type TProps = {
    onChange: (value: any) => void,
    error: string | null,
    hintText: string,
    text: string,
    options: Array<TOption>
}

const Selection: React.FC<TProps> = ({ onChange, options, hintText, text, error }) => {

    const handleChange = (value: TOption | null) => onChange(value?.label);

    return (
        <StyledSelectWrapper>
            <StyledLabel>{text}</StyledLabel>
            <StInputItem error={error}>
                <Select
                    className="test"
                    options={options}
                    onChange={handleChange}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 2,
                        colors: {
                            ...theme.colors,
                            primary25: 'lightgreen',
                            primary: 'rgba(47,100,90,1)',
                            danger:'blue',
                        },
                    })}
                />
                <StIcon>
                    <HelpIcon title={hintText}/>
                </StIcon>
                {error && <StError>{error}</StError>}
            </StInputItem>
        </StyledSelectWrapper>
    );
};

export default Selection;
