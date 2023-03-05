import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import Resort from "../Resort/Resort";
import Search from "../Search/Search";
import styles from "./Resorts.module.css";
import * as resortService from '../../services/resortService'

function Resorts({
    resorts,
}) {

    // const [resorts, setState] = useState({ data: [], isLoading: false });
    // useEffect(() => {
    //     setState((resorts) => ({ ...resorts, isLoading: true }));
    //     getResorts().then((data) => {
    //         setState((resorts) => ({ ...resorts, data, isLoading: false }));
    //     });
    // }, []);

    const [filtered, filterResorts] = useState([]); 

    const onResortSearch = async (searchQuery, country) => {
        const filtered = await resortService.getFilteredResorts(searchQuery, country);
        filterResorts(filtered);
    }

    return ( 
        <div>
            <div className={styles['query-options']}>
                <Dropdown />
                <Search onResortSearch={onResortSearch} />
            </div>
            <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}>
                {resorts.map((resort) => (
                    <Resort key={resort.id}
                        {...resort}
                    />
                ))}
            </div>
        </div>
    );
}

export default Resorts;