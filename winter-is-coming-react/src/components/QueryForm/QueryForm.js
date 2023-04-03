import { useState, useEffect } from "react";

import { getCountries } from "../../services/resortService";
import { useForm } from "../../hooks/useForm";

import styles from "../QueryForm/QueryForm.module.css";

export function QueryForm({
    onResortFilter,
}
) {
    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const { formValues, formChangeHandler, onSubmit } = useForm(
        {
            country: '',
            searchQuery: '',
        },
        onResortFilter);

    return (
        <form method='GET' onSubmit={onSubmit}>
            <div className={styles['row']}>
                <div className="form-group col-md-3 d-flex justify-content-between">
                    <div className={styles['form-group']}>
                        <label className={styles['label']} htmlFor="country">Country</label>
                        <select className="form-control"
                            id="country"
                            name="country"
                            value={formValues.country}
                            onChange={formChangeHandler}
                        >
                            <option value="">All</option>
                            {state.data.map((c) => (<option key={c.id} value={c.name}>{c.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <label className={styles['label']} htmlFor="searchQuery"><i className="fas fa-search"></i></label>
                    <input className="form-control"
                        placeholder="Search by name"
                        id="searchQuery"
                        name="searchQuery"
                        value={formValues.searchQuery}
                        onChange={formChangeHandler}
                    />
                </div>
                <div className="col-md-3">
                    <div className="form-group mt-4 p-2">
                        <button type="submit" className="btn btn-lg btn-primary">
                            Filter resorts
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}