import styles from "../Comments/Comments.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comment } from "../Comment/Comment";
import * as commentService from "../../services/commentService";

export const Comments = () => {
    const navigate = useNavigate();
    const { resortId } = useParams();

    const onBackButtonClick = () => {
        navigate(`/resorts/${resortId}`);
    };

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getResortComments(resortId)
            .then(comments => {
                setComments(comments)
            })
            .catch(error => console.log(error))
    }, [resortId]);

    return (
        <section className={styles['section']}>
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="card text-dark">
                            <div className="card-body p-4">
                                <h4 className="mb-0">Resort comments</h4>
                                {comments.map((comment) => (
                                    <Comment
                                        key={comment.id}
                                        {...comment}
                                    />
                                ))}</div>
                        </div>
                        <button className={`${styles['back-button']} btn btn-primary`} onClick={onBackButtonClick}>Back</button>
                    </div>
                </div>
            </div>
        </section>);
};