import { useContext, useState, useEffect } from "react";

import * as resortService from '../../services/resortService';
import * as priceService from '../../services/priceService';

import ResortCreate from "../Resort/ResortCreate";
import PriceCreate from "../Price/PriceCreate";
import { QueryForm } from "../QueryForm/QueryForm";
import Resort from "../Resort/Resort";
import styles from "./Resorts.module.css";
import { AuthContext } from "../../contexts/AuthContext";

export const Resorts = () => {

    const [resorts, setResorts] = useState([]);
    const [showAddPrice, setShowAddPrices] = useState(false);
    const [showAddResort, setShowAddResort] = useState(false);

    const { isAuthenticated, token, isAdmin } = useContext(AuthContext);

    useEffect(() => {
        resortService.getResorts()
            .then(resorts => {
                setResorts(resorts)
            })
            .catch(error => console.log(error))
    }, []);

    const onResortFilter = async (values) => {
        
        const searchQuery = values.searchQuery;
        const country = values.country;

        const filtered = await resortService.getFilteredResorts(searchQuery, country);

        setResorts(filtered);
    }

    const onResortCreate = async (values) => {

        const createdResort = await resortService.addResort(values, token);

        setResorts(state => [...state, createdResort]);

        setShowAddResort(false);
    };

    const onPriceCreate = async (values) => {
        await priceService.addPrice(values, token);
        setShowAddPrices(false)
    };

    const onPriceCreateClick = () => {
        setShowAddPrices(true);
    };

    const onResortCreateClick = () => {
        setShowAddResort(true);
    }

    const onPriceCreateClose = () => {
        setShowAddPrices(false);
    }

    const onResortCreateClose = () => {
        setShowAddResort(false);
    }

    return (
        <div className={styles['body']}>
            <PriceCreate
                onPriceCreate={onPriceCreate}
                show={showAddPrice}
                close={onPriceCreateClose}
            />
            <ResortCreate
                show={showAddResort}
                onResortCreate={onResortCreate}
                close={onResortCreateClose}
            />
            <div className={styles['query-options']}>
                <QueryForm onResortFilter={onResortFilter} />
            </div>
            {isAuthenticated && isAdmin && (<div className={styles['add-buttons']}>
                <button className="btn btn-primary" onClick={onResortCreateClick}>
                    Add new resort
                </button>
                <button className="btn btn-primary" onClick={onPriceCreateClick} >
                    Add new price
                </button>
            </div>)}
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

