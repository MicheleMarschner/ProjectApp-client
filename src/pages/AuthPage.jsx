import React, { useState, useEffect, useContext } from 'react';
import {AuthContext} from '../context/AuthContext.js';

function AuthPage() {
    const Auth = useContext(AuthContext);

    return (
        <div>
            Login
        </div>
    )
}

export default AuthPage
