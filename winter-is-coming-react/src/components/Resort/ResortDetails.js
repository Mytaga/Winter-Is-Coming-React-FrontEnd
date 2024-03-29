import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import * as resortService from "../../services/resortService";
import * as commentService from '../../services/commentService';

import { AuthContext } from '../../contexts/AuthContext';

import { CommentCreate } from "../Comment/CommentCreate";
import { Comments } from "../Comments/Comments";
import { Price } from "../Price/Price";
import styles from "../Resort/ResortDetails.module.css";
import { Weather } from "../Weather/Weather";

export function ResortDetails() {
    const { resortId } = useParams();
    const [resort, setResort] = useState({});
    const [prices, setPrices] = useState([]);
    const [showAddComment, setShowAddComment] = useState(false);
    const [comments, setComments] = useState([]);
    
    const { isAuthenticated, token, userId, onBackButtonClick } = useContext(AuthContext);

    useEffect(() => {
        resortService.getResortDetails(resortId)
            .then(resort => {
                setResort(resort)
                setPrices(resort.liftPrices)
            })
            .catch(error => console.log(error))
    }, [resortId]);

    useEffect(() => {
        commentService.getResortComments(resortId)
            .then(comments => {
                setComments(comments)
            })
            .catch(error => console.log(error))
    }, [resortId]);

    const onCommentCreate = async (values) => {
        const result = await commentService.addComment(values, resortId, token);
        console.log(result);
        setComments(state => [...state, result]);
        onCommentClose();
    };

    const onCommentCreateClick = () => {
        setShowAddComment(true);
    };

    const onCommentClose = () => {
        setShowAddComment(false);
    };

    const onDeleteClick = async () => {
        var result = await commentService.deleteComment(resortId, userId, token);
        setComments(state => state.filter(c => c.id !== result.id));
    };

    return (
        <div className={styles['content']}>
            <CommentCreate
                resortId={resortId}
                onCommentCreate={onCommentCreate}
                show={showAddComment}
                close={onCommentClose}
            />
            <h2 className={styles['header']}>{resort.countryName} - {resort.name}</h2>
            <Weather resort={resort}/>
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
                <div className={styles['image-body']}>
                    <img className={styles['image']} src={resort.imageUrl} alt={resort.name} />
                </div>
            </div>
            <div className={styles['buttons']}>
                <button className={`${styles['back-button']} btn btn-lg btn-primary`} onClick={onBackButtonClick}>
                    <i className="fas fa-arrow-left fa-lg"></i>
                </button>
                {isAuthenticated && (<button className={`${styles['comment-button']} btn  btn-lg btn-primary`} onClick={onCommentCreateClick}>
                    <i className="fas fa-comment fa-lg"></i>
                </button>)}
            </div>
            <Comments
                comments={comments}
                onDeleteClick={onDeleteClick}
            />
        </div>
    );
}

