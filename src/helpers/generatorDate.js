import {getDay, getMonth, getYear} from 'date-fns';

export const getFormattedDate = (value) => {
    return `${getDay(value)}.${getMonth(+value+1)}.${getYear(value)}`;
};