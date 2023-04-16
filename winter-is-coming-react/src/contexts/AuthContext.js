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
        const result = await accountService.register(data);

        if (result.status === 201) {
            navigate('/login');
        } else if (result.status === 400) {
            navigate('/register')
        } else {
            navigate("/registerError")
        };
    };

    const onLoginSubmit = async (data) => {
        const response = await accountService.login(data);
        
        if(response.status === 200){
            const result = response.json();
            setAuth(result);
            navigate('/');
        }

        navigate('/loginError');
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
        isAdmin: adminEmail === auth.email,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}