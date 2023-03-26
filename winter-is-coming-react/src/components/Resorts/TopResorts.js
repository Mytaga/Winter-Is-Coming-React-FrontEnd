import Resort from "../Resort/Resort";
import styles from "./TopResorts.module.css";
import { useState, useEffect } from "react";
import * as resortService from '../../services/resortService';

export const TopResorts = () =>{
    const [topResorts, setTopResorts] = useState([]);

    useEffect(() => {
        resortService.getTopResorts()
            .then(topResorts => {
                setTopResorts(topResorts)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}> 
            {topResorts.map((resort) => (
                <Resort
                    key={resort.id}
                    {...resort}
                />
            ))}
        </div>
    );
};