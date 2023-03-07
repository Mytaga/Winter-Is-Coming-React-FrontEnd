import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";

function Resorts({
    resorts,
    filter,
    query,
    setQuery,
    setFilterParam
}) {

    // const [resorts, setState] = useState({ data: [], isLoading: false });
    // useEffect(() => {
    //     setState((resorts) => ({ ...resorts, isLoading: true }));
    //     getResorts().then((data) => {
    //         setState((resorts) => ({ ...resorts, data, isLoading: false }));
    //     });
    // }, []);

    // const [filtered, filterResorts] = useState([]); 

    // const onResortSearch = async (searchQuery, country) => {
    //     const filtered = await resortService.getFilteredResorts(searchQuery, country);
    //     filterResorts(filtered);  
    // }

    return (
        <div>
            <div className={styles['query-options']}>
                <QueryForm
                    query={query}
                    setQuery={setQuery}
                    setFilterParam={setFilterParam} />
            </div>
            <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}>
                {filter(resorts).map((resort) => (
                    <Resort key={resort.id}
                        {...resort}
                    />
                ))}
            </div>
        </div>
    );
}

export default Resorts;