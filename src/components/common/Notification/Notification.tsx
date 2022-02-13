import React from 'react';
import {StNotification} from "./styled";
// import {ReactComponent as CloudIcon} from "../../../icons/cloudFull.svg";
// import {StIcon} from "../Input/styled";

const Notification = ({message, type}: any) => {
    return (
        <StNotification isSuccess={type === "success"}>
            {/*<StIcon>*/}
            {/*    <CloudIcon/>*/}
            {/*</StIcon>*/}
            <p>{message}</p>
        </StNotification>
    );
};

export default Notification;
