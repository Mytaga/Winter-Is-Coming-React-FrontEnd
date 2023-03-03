import { getCountries } from '../../services/fetch-data';
import styles from './Dropdown.module.css';
import { useEffect, useState } from 'react';

export function Dropdown() {
    const [state, setState] = useState({ data: [], isLoading: false });
    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    return (
        <div className={styles['btn-group']}>
            <button type="button" className="btn btn-primary">Select Country</button>
            <button
                type="button"
                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                {state.data.map((c) => (<li key={c.id}><a className="dropdown-item" href="#">{c.name}</a></li>) )}
            </ul>
        </div>
    );
}