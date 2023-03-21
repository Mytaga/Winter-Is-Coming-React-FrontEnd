import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { QueryForm } from "../QueryForm/QueryForm";
import { Link } from "react-router-dom";
import PriceCreate from "../Price/PriceCreate";
import { useState } from "react";
import * as priceService from '../../services/priceService';

export const Resorts = ({
    resorts,
    onResortFilterSubmit,
}) => {

    const [showAddPrice, setShowAddPrices] = useState(false);

    const onResortFilterSubmitHandler = (e) => {
        onResortFilterSubmit(e);
    };

    const onPriceCreate = async (values) => {
        await priceService.addPrice(values);
        onPriceCreateClose();
    };

    const onPriceCreateClick = () => {
        setShowAddPrices(true);
    };

    const onPriceCreateClose = () => {
        setShowAddPrices(false);
    }

    return (
        <div className={styles['body']}>
            <PriceCreate
                onPriceCreate={onPriceCreate}
                show={showAddPrice}
                close={onPriceCreateClose}
            />
            <div className={styles['query-options']}>
                <QueryForm onResortFilterSubmit={onResortFilterSubmitHandler} />
            </div>
            <div className={styles['add-buttons']}>
                <button className="btn btn-primary">
                    <Link to={'/resorts/create'} className={styles['add-button']}>
                        Add new resort
                    </Link>
                </button>
                <button className="btn btn-primary" onClick={onPriceCreateClick}>
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

