import { useEffect, useState } from "react";
import getData from '../../services/fetch-data';
import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";

function Resorts() {

    const [state, setState] = useState({ data: [], isLoading: false });
    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getData().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    return (
        <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}>
            {state.data.map((resort) => (
                    <Resort key={resort.id}
                        {...resort}
                    />
            ))}
        </div>);
}

export default Resorts;