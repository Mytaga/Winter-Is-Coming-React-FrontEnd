import { useState } from 'react';
import styles from './Search.module.css'

export default function Search(
    onResortSearch
) {
    const [searchQuery, setSearch] = useState('');
    
    const handleChange = (event) =>{
            setSearch(event.target.value);
    }
    return (
        <div className={styles['input-group']}>
            <div className={styles['form-outline']}>
                <input type="search" id="form1" onChange={handleChange} className="form-control" />
            </div>
            <button type="button" onClick={() => onResortSearch(searchQuery)} className="btn btn-primary">
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}