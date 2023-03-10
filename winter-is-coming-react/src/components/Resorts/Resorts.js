import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";
import { useState } from "react";
import ResortCreate from "../Resort/ResortCreate";

function Resorts({
    resorts,
    formValues,
    formErrors,
    onResortFilterSubmit,
    onResortCreateSubmit,
    formChangeHandler,
    formValidate,
}) {

    const [showAddResort, setShowAddResort] = useState(false);

    const onClose = () => {
        setShowAddResort(false);
    };

    const onResortAddClick = () => {
        setShowAddResort(true);
    };

    const onResortFilterSubmitHandler = (e) => {
        onResortFilterSubmit(e);
    }

    const onResortCreateSubmitHandler = (e) => {
        onResortCreateSubmit(e);
        setShowAddResort(false);
    };

    return (
            <div>
                {showAddResort && <ResortCreate
                onClose={onClose}
                onResortCreateSubmit={onResortCreateSubmitHandler}
                formValues={formValues}
                formErrors={formErrors}
                formChangeHandler={formChangeHandler}
                formValidate={formValidate}
                />}
                
                <div className={styles['query-options']}>
                    <QueryForm onResortFilterSubmit={onResortFilterSubmitHandler} />
                </div>
                <div className={`${styles['cards']} row row-cols-1 row-cols-md-3 g-4`}>
                    {resorts.map((resort) => (
                        <Resort
                            key={resort.id}
                            {...resort}
                        />
                    ))}
                </div>
                <button className="btn-add btn" onClick={onResortAddClick}>Add new resort</button>
            </div>
    );
}

export default Resorts;