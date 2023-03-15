import Price from "../Price/Price";
import styles from "../Resort/ResortDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as resortService from "../../services/resortService";

function ResortDetails() {
    const { resortId } = useParams();
    const navigate = useNavigate();
    const [resort, setResort] = useState({});
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        resortService.getResortDetails(resortId)
            .then(resort => {
                setResort(resort)
                setPrices(resort.liftPrices)
            })
            .catch(error => console.log(error))
    }, [resortId]);

    const onBackButtonClick = () => {
        navigate('/resorts');
    };

    return (
        <div className={styles['content']}>
            <h2 className={styles['header']}>{resort.countryName} - {resort.name}</h2>
            <div className={styles['main-body']}>
                <div className={styles['body']}>
                    <p>ELEVATION: <strong>{resort.elevation} m</strong></p>
                    <p>DESCRIPTION: <strong>{resort.description}</strong></p>
                    <p>NUMBER OF SLOPES: <strong>{resort.numberOfSlopes}</strong></p>
                    <p>SKI AREA: <strong>{resort.skiAreaSize} km</strong></p>
                    <p>LIKES: <strong>{resort.likes}</strong></p>
                    <p>LIFT PRICES:</p>
                    <table className={`${styles['table']} table table-sm table-hover table-bordered border-dark`}>
                        <thead>
                            <tr>
                                <th scope="col">Card Type</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prices.map((p) => (
                                <Price
                                    key={p.id}
                                    {...p}
                                />))}
                        </tbody>
                    </table>
                </div>
                <div className={styles['image']}>
                    <img src={resort.imageUrl} alt={resort.name} />
                </div>
            </div>
            <div className={styles['buttons']}>
                <button className={`${styles['back-button']} btn btn-primary`} onClick={onBackButtonClick}>Back</button>
                <button className="btn btn-primary">Comments</button>
            </div>
        </div>
    );
}

export default ResortDetails;