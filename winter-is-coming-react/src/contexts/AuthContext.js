import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import * as accountService from '../services/accountService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}
) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const navigate = useNavigate();

    const onLogout = async () => {
        await accountService.logout(auth.token);
        setAuth({});
    }

    const onRegisterSubmit = async (data) => {
        await accountService.register(data);
        navigate('/login');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await accountService.login(data);
            setAuth(result);
        } catch (error) {
            console.log('Credentials do not mach!')
        }

        navigate('/');
    };

    const onBackButtonClick = () => {
        navigate('/resorts');
    };

    const adminEmail = 'admin@abv.bg';

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onBackButtonClick,
        setAuth,
        userId: auth.id,
        token: auth.token,
        username: auth.userName,
        firstname: auth.firstName,
        lastname: auth.lastName,
        image: auth.image,
        isAuthenticated: !!auth.token,
        isAdmin: !!adminEmail,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}