import { getCountries } from '../../services/resortService';
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
        <select className={styles['form-select']} aria-label="Select Country">
            <option selected>Countries</option>
            {state.data.map((c) => (<option key={c.id} value="1">{c.name}</option>))}
        </select>
    );
}