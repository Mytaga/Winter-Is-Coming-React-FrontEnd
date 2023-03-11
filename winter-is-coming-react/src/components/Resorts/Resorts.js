import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";
import { useState } from "react";
import ResortCreate from "../Resort/ResortCreate";

export const Resorts = ({
    resorts,
    formValues,
    formErrors,
    onResortFilterSubmit,
    onResortCreateSubmit,
    formChangeHandler,
    formValidate,
}) => {

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
            {showAddResort &&
                <ResortCreate
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
            <div className={styles['add-button']}> 
                <button type="button" onClick={onResortAddClick} className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Add new resort
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

