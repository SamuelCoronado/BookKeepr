import React from 'react';
import Form from './Form/Form';

 const LoginComponent = ({setProfileHandler}) => {
    return (
        <div className="mb-20 w-full md:w-2/6 mx-auto flex flex-col items-center p-3 rounded shadow-lg">
            <p className="mb-10 text-2xl font-semibold">Register</p>
            <Form setUser={setProfileHandler} />
        </div>
    )
}

export default LoginComponent;
