import React from 'react';
import {StNotification} from "./styled";

type TProps = {
    message: string,
    type: string
}

const Notification: React.FC<TProps> = ({message, type}) => {
    return (
        <StNotification isSuccess={type === "success"}>
            <p>{message}</p>
        </StNotification>
    );
};

export default Notification;
