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
        <div className={`${styles['card']} col`}>
            <div className="card h-100">
                <img src={imageUrl} className={`${styles['img']} card-img-top`} alt="resort" />
                <div className={`${styles['body']} card-body`}>
                    <h5 className={`${styles['title']} card-title`}>{name}</h5>
                    <p >
                        <strong>Country:</strong> {countryName}
                    </p>
                    <p className="card-text">
                        <strong>Elevation:</strong> {elevation}m
                    </p>
                    <div >
                        <button onClick={() => onDetailsClick(id)} className={styles['details-btn']} data-mdb-toggle="modal" data-mdb-target="#detailsModal"><i class="fas fa-info-circle"></i> </button>
                        {resort && <ResortDetails {...resort} onClose={onClose} />}
                        <button className={styles['like-btn']}><i class="fas fa-heart"></i></button>
                        <button className={styles['comment-btn']}><i class="fas fa-comment"></i></button>
                    </div>
                </div>
                <div className={`${styles['footer']} card-footer`}>
                    <small className="text-muted"><strong>Likes:</strong> {likes}</small>
                </div>
            </div>
        </div>
    );
}

export default Resort;