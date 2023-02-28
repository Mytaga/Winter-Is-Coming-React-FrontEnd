import { useEffect, useState } from "react";
import getAllResorts from '../services/fetch-data';
import Resort from "./Resort";

const host = 'https://localhost:5001/api/Resort/GetAll';

async function AllResorts() {
    
    const[resorts, setResorts] = useState([]);
    
    useEffect( () =>{
        fetch(host)
        .then(res => res.json())
        .then(resortData => {
            console.log(resortData);
            setResorts(resortData);
        });
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {resorts.map((resort) => (<Resort key={resort.id} {...resort}/>))}
        </div>);
}

export default AllResorts;