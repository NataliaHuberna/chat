import * as React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import MainLayout from './components/MainLayout/MainLayout';


function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                {/*<Route path="/asseptInvitation" element={<AsseptInvitation />} />*/}
                {/*<Route path="/errorInvitation" element={<ErrorInvitation />} />*/}
                {/*<Route path="/newPassword" element={<NewPassword />} />*/}
                <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                {/*<Route path="/errorForgotPassword" element={<ErrorForgotPassword />} />*/}
                {/*<Route path="/maim" element={<Main />} /> */}
            </Routes>
        </MainLayout>
    );
}

export default App;
