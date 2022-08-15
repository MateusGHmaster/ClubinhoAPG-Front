import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider ({ children }) {

    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

    return (

        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>

    );

}