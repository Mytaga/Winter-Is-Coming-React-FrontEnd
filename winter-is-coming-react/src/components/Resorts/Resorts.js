import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";
import { Link } from "react-router-dom";

export const Resorts = ({
    resorts,
    onResortFilterSubmit,
}) => {
    const onResortFilterSubmitHandler = (e) => {
        onResortFilterSubmit(e);
    };

    return (
        <div className={styles['body']}>
            <div className={styles['query-options']}>
                <QueryForm onResortFilterSubmit={onResortFilterSubmitHandler} />
            </div>
            <div className={styles['add-buttons']}>
                <button className="btn btn-primary">
                    <Link to={'/resorts/create'} className={styles['add-button']}>
                        Add new resort
                    </Link>
                </button>
                <button className="btn btn-primary">
                    <Link to={'/resorts/create-price'} className={styles['add-button']}>
                        Add new price
                    </Link>
                </button>
            </div>
            <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}>
                {resorts.map((resort) => (
                    <Resort
                        key={resort.id}
                        {...resort}
                    />
                ))}
            </div>

        </div>
    );
}

