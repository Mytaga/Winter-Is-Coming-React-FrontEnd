import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import * as likeService from '../../services/likeService';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './Resort.module.css'

export const Resort = ({
    id,
    name,
    imageUrl,
    elevation,
    countryName,
}) => {

    const [allLikes, setAllLikes] = useState([]);
    const { isAuthenticated, userId, token } = useContext(AuthContext);

    const isLiked = allLikes.some(l => l.userId === userId);

    useEffect(() => {
        likeService.getResortLikes(id)
            .then(likes => {
                setAllLikes(likes)
            })
            .catch(error => console.log(error))
    }, [id, token]);

    const onLikeClick = async () => {

        if (!isLiked) {
            const like = await likeService.likeResort(id, userId, token);
            setAllLikes(state => [...state, like]);
        } else {
            const like = await likeService.unlikeResort(id, userId, token);
            setAllLikes(state => state.filter(l => l.id !== like.id));
        }
    }

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
                        {isAuthenticated && (<button className={styles['like-btn']} onClick={onLikeClick}>
                            <Link>
                                {!isLiked ? <i className="far fa-heart"></i> : <i className="fas fa-heart"></i>}
                            </Link>
                        </button>)}
                    </div>
                </div>
                <div className={`${styles['footer']} card-footer`}>
                    <small className="text-muted"><strong>Likes:</strong> {allLikes.length}</small>
                </div>
            </div>
        </div>
    );
}
