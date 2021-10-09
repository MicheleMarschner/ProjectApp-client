import { useState, createContext } from 'react';

export const AuthContext = createContext();


function AuthProvider({children}) {
    const [ isLoggedIn, setLoggedIn ] = useState(true);

    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
