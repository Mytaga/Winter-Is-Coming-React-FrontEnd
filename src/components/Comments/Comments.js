import styles from "../Comments/Comments.module.css";
import { Comment } from "../Comment/Comment";

export const Comments = (comments) => {
    return (
        <section className={styles['section']}>
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="card text-dark">
                            <div className="card-body p-4">
                                <h4 className="mb-0">Comments</h4>
                                {comments.comments.map((comment) => (
                                    <Comment
                                        key={comment.id}
                                        {...comment}
                                    />
                                ))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};