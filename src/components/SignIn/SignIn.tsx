import React, { useState } from 'react';
import Form from '../common/Form/Form';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const [user, setUser] = useState({ email: '', password: '' });

    return (
        <div className="login">
            <h1>Log In</h1>
            <hr/>
            <Form someAction={setUser}/>
            <div>
                <p>
                    Don`t have an account?
                    <Link to="/signUp">
                        <a href='#'>Sign Up Here </a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
