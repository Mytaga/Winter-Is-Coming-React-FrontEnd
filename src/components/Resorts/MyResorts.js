import Resort from "../Resort/Resort";
import styles from "./MyResorts.module.css";
import { useState, useEffect, useContext } from "react";
import * as resortService from '../../services/resortService';
import { AuthContext } from '../../contexts/AuthContext';

export const MyResorts = () => {
    const [myResorts, setMyResorts] = useState([]);
    const { userId, token } = useContext(AuthContext);

    useEffect(() => {
        resortService.getMyResorts(userId, token)
            .then(myResorts => {
                setMyResorts(myResorts)
            })
            .catch(error => console.log(error))
    }, [userId, token]);

    return (
        <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}> 
            {myResorts.map((resort) => (
                <Resort
                    key={resort.id}
                    {...resort}
                />
            ))}
            {myResorts.length === 0 && (
                <h3>You haven't liked any resorts yet !</h3>
            )}
        </div>
    );
};