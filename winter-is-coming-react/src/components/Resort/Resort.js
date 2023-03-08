import styles from './Resort.module.css'
import * as resortService from "../../services/resortService";
import { useState } from "react";
import ResortDetails from "../Resort/ResortDetails";

function Resort({
    id,
    name,
    imageUrl,
    elevation,
    countryName,
    likes,
}) {
    const [resort, setResort] = useState(null);

    const onDetailsClick = async (resortId) => {
        const resort = await resortService.getResortDetails(resortId);
        setResort(resort);
    }

    const onClose = () => {
        setResort(null);
    };

    return (
        <div className={`${styles['card']} card h-100`}>
            <img src={imageUrl} className={styles['card-img-top']} alt="resort" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p >
                    <strong>Country:</strong> {countryName}
                </p>
                <p className="card-text">
                    <strong>Elevation:</strong> {elevation}
                </p>
                <div >
                    <button onClick={() => onDetailsClick(id)} className={styles['details-btn']} data-mdb-toggle="modal" data-mdb-target="#detailsModal">Details</button>
                    {resort && <ResortDetails {...resort} onClose={onClose}/>}
                    <button className={styles['like-btn']}>Like</button>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted"><strong>Total Likes:</strong> {likes}</small>
            </div>
        </div>
    );
}

export default Resort;