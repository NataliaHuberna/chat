import * as React from 'react';
import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import './components/MainLayout/MainLayout.css';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            {/*<Route path="/asseptInvitation" element={<AsseptInvitation />} />*/}
            {/*<Route path="/errorInvitation" element={<ErrorInvitation />} />*/}
            {/*<Route path="/newPassword" element={<NewPassword />} />*/}
            <Route path="/forgotPassword" element={<ForgotPassword/>} />
            {/*<Route path="/errorForgotPassword" element={<ErrorForgotPassword />} />*/}
            {/*<Route path="/maim" element={<Main />} /> */}
        </Routes>
    );
}

export default App;
