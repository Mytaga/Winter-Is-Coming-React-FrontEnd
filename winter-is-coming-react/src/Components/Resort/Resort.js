import styles from './Resort.module.css'

function Resort({
    name,
    imageUrl,
    elevation,
    countryName,
    likes
}) {
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
                    <button className={styles['details-btn']}>Details</button>
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