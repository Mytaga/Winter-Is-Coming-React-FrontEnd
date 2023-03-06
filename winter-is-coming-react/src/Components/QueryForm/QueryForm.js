import { useState, useEffect } from "react";
import { getCountries } from "../../services/resortService";

export function QueryForm(
    query,
    setQuery,
    setFilterParam
) {

    // const [searchQuery, setSearch] = useState('');

    // const handleChange = (event) => {
    //     setSearch(event.target.value);
    // }

    // const [selected, setSelected] = useState(state.data[0]);

    // const handleSelectChange = event => {
    //     setSelected(event.target.value);
    // }

    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    return (
        <div className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                    value={query}
                    /* 
                    // set the value of our useState e
                    //  anytime the user types in the search box
                    */
                    onChange={(e) => setQuery(e.target.value)}
                />
                <span className="sr-only">Search resorts</span>
            </label>

            <div className="select">
                <select
                    onChange={(e) => {
                        setFilterParam(e.target.value);
                    }}
                    className="custom-select"
                    aria-label="Filter Countries By Countries"
                >
                    <option value="All">Filter By Country</option>
                    {state.data.map((c) => (<option key={c.id} value={c.name}>{c.name}</option>))}
                </select>
                <span className="focus"></span>
            </div>
        </div>
    );
}