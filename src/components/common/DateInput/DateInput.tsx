import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from 'date-fns';
import { StDatepickerWrapper } from './styled';
import { ReactComponent as HelpIcon } from '../../../icons/help.svg';
import { StIcon, StyledLabel, StInputItem, StError } from '../Input/styled';

const years = [
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2022,
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const DateInput = ({ onChange, value, hintText, text, error }: any) => {
    const handleChange = (date: Date) => onChange(date);
    // console.log(date);
    return (
        <StDatepickerWrapper error={error}>
            <StyledLabel>{text}</StyledLabel>
            <StInputItem>
                <DatePicker
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <select
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(Number(value))}
                            >
                                {years.map((option: any) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={months[getMonth(date)]}
                                onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                }
                            >
                                {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                        </div>
                    )}
                    selected={value}
                    onChange={handleChange}
                />
                <StIcon>
                    <HelpIcon title={hintText || null}/>
                </StIcon>
                {error && <StError>{error}</StError>}
            </StInputItem>
        </StDatepickerWrapper>
    );
};

export default DateInput;
