import { useContext, useState, useEffect } from "react";

import * as resortService from '../../services/resortService';
import * as priceService from '../../services/priceService';

import { ResortCreate }from "../Resort/ResortCreate";
import PriceCreate from "../Price/PriceCreate";
import { QueryForm } from "../QueryForm/QueryForm";
import { Resort } from "../Resort/Resort";
import { AuthContext } from "../../contexts/AuthContext";
import { ResortDelete } from "../Resort/ResortDelete";
import styles from "./Resorts.module.css";

export const Resorts = () => {

    const [resorts, setResorts] = useState([]);
    const [showAddPrice, setShowAddPrices] = useState(false);
    const [showAddResort, setShowAddResort] = useState(false);
    const [showDeleteResort, setShowDeleteResort] = useState(false);

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

    const onResortDelete = async (values) => {

        const deletedResort = await resortService.deleteResort(values.id, token);

        setResorts(state => state.filter(r => r.id !== deletedResort.id));

        setShowDeleteResort(false);
    }

    const onPriceCreate = async (values) => {
        await priceService.addPrice(values, token);
        setShowAddPrices(false)
    };

    const onPriceCreateClick = () => {
        setShowAddPrices(true);
    };

    const onResortCreateClick = () => {
        setShowAddResort(true);
    };

    const onResortDeleteClick = () => {
        setShowDeleteResort(true);
    };

    const onPriceCreateClose = () => {
        setShowAddPrices(false);
    };

    const onResortCreateClose = () => {
        setShowAddResort(false);
    };

    const onResortDeleteClose = () => {
        setShowDeleteResort(false);
    };

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
            <ResortDelete
                show={showDeleteResort}
                onResortDelete={onResortDelete}
                close={onResortDeleteClose}
            />
            <div className={styles['query-options']}>
                <QueryForm onResortFilter={onResortFilter} />
            </div>
            {isAuthenticated && isAdmin && (<div className={styles['add-buttons']}>
                <button className="btn btn-lg btn-primary" onClick={onResortCreateClick}>
                    Add new resort
                </button>
                <button className="btn btn-lg btn-primary" onClick={onPriceCreateClick} >
                    Add new price
                </button>
                <button className="btn btn-lg btn-primary" onClick={onResortDeleteClick}>
                    Delete resort
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

