import { useEffect, useState } from "react";
import getAllResorts from '../services/fetch-data';
import Resort from "./Resort";

async function AllResorts() {
    const resorts = getAllResorts();
    
    this.setState({resorts});
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.state.resorts.map((r) => (<Resort
                key={r.id}
                name={r.name}
                elevation={r.elevation}
                image={r.imageUrl}
                likes={r.likes}
                country={r.countryName}
            />))}
        </div>);
}

export default AllResorts;