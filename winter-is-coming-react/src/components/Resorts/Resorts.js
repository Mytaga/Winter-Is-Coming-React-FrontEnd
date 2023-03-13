import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";
import { useState } from "react";
import ResortCreate from "../Resort/ResortCreate";
import PriceCreate from "../Price/PriceCreate";

export const Resorts = ({
    resorts,
    formValues,
    formErrors,
    priceFormValues,
    priceFormErrors,
    onResortFilterSubmit,
    onResortCreateSubmit,
    onPriceCreateSubmit,
    formChangeHandler,
    priceFormChangeHandler,
    formValidate,
    priceFormValidate,
}) => {

    const [showAddResort, setShowAddResort] = useState(false);
    const [showAddPrice, setShowAddPrice] = useState(false);

    const onClose = () => {
        setShowAddResort(false);
        setShowAddPrice(false);
    };

    const onResortAddClick = () => {
        setShowAddResort(true);
    };

    const onPriceAddClick = () => {
        setShowAddPrice(true);
    };

    const onResortFilterSubmitHandler = (e) => {
        onResortFilterSubmit(e);
    };

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
            {showAddPrice &&
                <PriceCreate
                    onClose={onClose}
                    onPriceCreateSubmit={onPriceCreateSubmit}
                    priceFormValues={priceFormValues}
                    priceFormErrors={priceFormErrors}
                    priceFormChangeHandler={priceFormChangeHandler}
                    priceFormValidate={priceFormValidate}
                />}
            <div className={styles['query-options']}>
                <QueryForm onResortFilterSubmit={onResortFilterSubmitHandler} />
            </div>
            <div className={styles['add-button']}>
                <button type="button" onClick={onResortAddClick} className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Add new resort
                </button>
                <button type="button" onClick={onPriceAddClick} className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Add new price
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

