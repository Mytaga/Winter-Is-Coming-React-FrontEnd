import { useState, useEffect } from "react";
import { getCountries } from "../../services/resortService";
import styles from "../QueryForm/QueryForm.module.css";

export function QueryForm(
    onResortFilterSubmit
) {
    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    return (
        <form onSubmit={ (e) => onResortFilterSubmit(e)}>
            <div className={styles['row']}>
                <div className="form-group col-md-3 d-flex justify-content-between">
                    <div className={styles['form-group']}>
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" className="form-control">
                            <option value="">All</option>
                            {state.data.map((c) => (<option key={c.id} value={c.name}>{c.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="searchQuery">Search</label>
                    <input id="searchQuery" name="searchQuery" className="form-control" placeholder="Search by name"></input>
                </div>
                <div className="col-md-3">
                    <div className="form-group mt-4 p-2">
                        <button type="submit" className="btn btn-primary">
                            Filter resorts
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}