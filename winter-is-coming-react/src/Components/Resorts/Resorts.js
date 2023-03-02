import { useEffect, useState } from "react";
import { getResorts } from "../../services/fetch-data";
import { Dropdown } from "../Dropdown/Dropdown";
import Resort from "../Resort/Resort";
import Search from "../Search/Search";
import styles from "./Resorts.module.css";

function Resorts() {

    const [state, setState] = useState({ data: [], isLoading: false });
    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getResorts().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const onResortSearch = (searchQuery) => {
        setState(state => state.filter(r => r.name.startsWith(searchQuery)));
    }

    return (
        <div>
            <div className={styles['query-options']}>
                <Dropdown />
                <Search onResortSearch={onResortSearch} />
            </div>
            <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}>
                {state.data.map((resort) => (
                    <Resort key={resort.id}
                        {...resort}
                    />
                ))}
            </div>
        </div>
    );
}

export default Resorts;