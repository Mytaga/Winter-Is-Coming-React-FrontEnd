import styles from './Resort.module.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

function Resort({
    id,
    name,
    imageUrl,
    elevation,
    countryName,
    likes,
}) {
    const { isAuthenticated } = useContext(AuthContext);
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
                        <button className={styles['details-btn']}>
                            <Link to={`/resorts/${id}`}>
                                <i className="fas fa-info-circle"></i>
                            </Link>
                        </button>
                        {isAuthenticated && (<button className={styles['like-btn']}>
                            <Link>
                                <i className="fas fa-heart"></i>
                            </Link>
                        </button>)}
                    </div>
                </div>
                <div className={`${styles['footer']} card-footer`}>
                    <small className="text-muted"><strong>Likes:</strong> {likes}</small>
                </div>
            </div>
        </div>
    );
}

export default Resort