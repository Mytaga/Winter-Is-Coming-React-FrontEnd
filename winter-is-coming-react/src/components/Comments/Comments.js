import styles from "../Comments/Comments.module.css";
import { Comment } from "../Comment/Comment";

export const Comments = ({
    comments,
    onDeleteClick,
}) => {
    return (
        <section className={styles['section']}>
            <div className={`${styles['main']} container my-5 py-5`}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="card text-dark">
                            <div className={`${styles['body']} card-body p-4`}>
                                <h4 className={`${styles['header']} mb-0`}>Comments:</h4>
                                {comments.map((comment) => (
                                    <Comment
                                        key={comment.id}
                                        {...comment}
                                        onDeleteClick={onDeleteClick}
                                    />
                                ))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};