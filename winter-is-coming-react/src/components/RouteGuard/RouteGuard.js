import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({
    children,
}) =>{
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/login'/>
    } 
    return(
        <>
        {children}
        </>      
    );
};
