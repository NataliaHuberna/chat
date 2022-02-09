import * as React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import NewPassword from './components/NewPassword/NewPassword';
import AcceptInvitation from './components/AcceptInvitation/AcceptInvitation';
import ErrorForgotPassword from './components/ErrorForgotPassword/ErrorForgotPassword';
import ErrorInvitation from './components/ErrorInvitation/ErrorInvitation';
import MainLayout from './components/MainLayout/MainLayout';
import Main from './components/Main/Main';


function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/acceptInvitation" element={<AcceptInvitation />} />
                <Route path="/errorInvitation" element={<ErrorInvitation />} />
                <Route path="/newPassword" element={<NewPassword/>} />
                <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                <Route path="/errorForgotPassword" element={<ErrorForgotPassword />} />
            </Route>
            <Route path="/main" element={<Main/>}/>
        </Routes>
        // <MainLayout>
        //     <Routes>
        //         <Route path='/sing-up' element={<SignUp />}/>
        //         <Route path="/movies/:id" element={<ForgotPassword />}/>
        //         <Route path='/' element={<SignIn/>}/>
        //         <Route path="/main" element={<Main/>}/>
        //     </Routes>
        // </MainLayout>
    );
}

export default App;
