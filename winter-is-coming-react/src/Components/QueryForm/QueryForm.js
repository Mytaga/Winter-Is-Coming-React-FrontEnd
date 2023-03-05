import { useState, useEffect } from "react";
import { getCountries } from "../../services/resortService";

export function QueryForm(
    onResortSearch
) {

    const [searchQuery, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const [selected, setSelected] = useState(state.data[0]);

    const handleSelectChange = event => {
        setSelected(event.target.value);
    }

    return (
        <form method="get">
            <div className="row">
                <div className="form-group col-md-3 d-flex justify-content-between">
                    <div className="form-group">
                        <label>Select Country</label>
                        <select value={selected} onChange={handleSelectChange} className="form-control" aria-label="Select Country">
                            <option>All</option>
                            {state.data.map((c) => (<option key={c.id} value={c.name}>{c.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <label>Search</label>
                    <input type="search" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-3">
                    <div className="form-group mt-4 p-2">
                        <button type="button" onClick={() => onResortSearch(searchQuery, selected)} className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}