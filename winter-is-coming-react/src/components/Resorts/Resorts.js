import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";

function Resorts({
    resorts,
    onResortFilterSubmit
}) {

    const onResortFilterSubmitHandler = (e) =>{
        onResortFilterSubmit(e);
    }
    return (
        <div>
            <div className={styles['query-options']}>
                <QueryForm onResortFilterSubmit={onResortFilterSubmitHandler} />
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