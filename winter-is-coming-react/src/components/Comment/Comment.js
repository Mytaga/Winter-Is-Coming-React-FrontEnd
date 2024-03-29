import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import styles from "../Comment/Comment.module.css"


export const Comment = ({
    author,
    content,
    publishedOn,
    authorImage,
    onDeleteClick,
    authorId,
}) => {

    const { userId } = useContext(AuthContext)

    const isOwner = userId === authorId;

    return (
        <div className={`${styles['body']} d-flex flex-start`}>
            <img className="rounded-circle shadow-1-strong me-3"
                src={authorImage} alt={author} width="60"
                height="60" />
            <div className={styles['comment']}>
                <h6 className="fw-bold mb-1">{author}</h6>
                <div className="d-flex align-items-center mb-3">
                    <p className="mb-0">
                        {publishedOn}
                    </p>
                    {isOwner && (<button className={styles['link-muted']} onClick={onDeleteClick}>
                        <i className="fas fa-trash"></i>
                    </button>)}
                </div>
                <p className={`${styles['content']} mb-0`}>
                    {content}
                </p>
            </div>
        </div>
    )
};