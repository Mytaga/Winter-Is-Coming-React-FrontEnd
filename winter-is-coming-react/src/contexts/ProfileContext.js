import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as accountService from "../services/accountService";

export const ProfileContext = createContext();

export const ProfileProvider = ({
    children,
}) =>{
    
    const [user, setUser] = useState({});

    const { userId, token } = useContext(AuthContext);
  
    useEffect(() => {
        accountService.getProfile(userId, token)
            .then(user => {
                setUser(user)
            })
            .catch(error => console.log(error))
    }, [userId, token, setUser]);

    const userValues ={
        setUser,
        userImage: user.imageUrl,
        username: user.userName,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email
    }

    return (
        <>
            <ProfileContext.Provider value={userValues}>
                {children}
            </ProfileContext.Provider>
        </>
    );
};