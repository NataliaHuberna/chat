import React, {useState} from "react";
const Context = React.createContext({});

type TProps = {
    children: React.ReactNode
};

const NotificationContextProvider:React.FC<TProps> = ({children}) => {
    const [state, setState] = useState ({
        type: '', //"sucess" | "fail"
        message: '',
    });

    const showNotification = ({type, message}:any) => {
        setState({type, message});
        setTimeout(clearNotification, 3000);
    };

    const clearNotification = () => {
        setState({
            type: '', //"sucess" | "fail"
            message: '',
        });
    };

    return (
        <Context.Provider value={ {notification: {...state}, showNotification }}>
            {children}
        </Context.Provider>
    );
};

export {NotificationContextProvider, Context as NotificationContext};
