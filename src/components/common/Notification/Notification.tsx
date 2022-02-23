import React from 'react';
import {StNotification} from "./styled";
import {TNotify} from "../../../store/notification/types";

type TNotificationProps = {
    clearNotification: () => void,
    notify: TNotify
};

const Notification = ({clearNotification, notify}: TNotificationProps) => {
    const {type, message} = notify;
    React.useEffect(() => {
        if (type) {
            setTimeout(() => {
                clearNotification();
            }, 2000);}
    }, [type]);
    return type && (<StNotification isSuccess={type}><p> {message} </p></StNotification>);
};

export default Notification;
