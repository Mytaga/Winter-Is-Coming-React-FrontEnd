import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import styles from "../Comment/CommentCreate.module.css";

export const CommentCreate = ({
    onCommentCreateSubmit,
}) => {

    const navigate = useNavigate();
    const { resortId } = useParams();
    const onBackButtonClick = () => {
        navigate(`/resorts/${resortId}`);
    };

    const [commentFormValues, setCommentFormValues] = useState({
        content: '',
    });

    const [commentFormErrors, setCommentFormErrors] = useState({
        content: '',
    });

    const commentFormChangeHandler = (e) => {
        setCommentFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const commentFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'content' && (value.length < 10 || value.length > 300)) {
            errors.content = 'Content must be between 10 and 300 characters';
        }

        setCommentFormErrors(errors);
    }

    return (
        <section className={styles['create']}>
            <div className="container my-5 py-5 text-dark">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex flex-start w-100">
                                    <img className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
                                        height="65" />
                                    <div className="w-100">
                                        <h5>Add a comment</h5>
                                        <form onSubmit={(e) => onCommentCreateSubmit(e)}>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="content">Enter your comment</label>
                                                <textarea className={`${styles['content']} form-control`}
                                                    id="content"
                                                    name="content"
                                                    type="text-area"
                                                    rows="4"
                                                    value={commentFormValues.content}
                                                    onChange={commentFormChangeHandler}
                                                    onBlur={commentFormValidate}
                                                />
                                                {commentFormErrors.content &&
                                                    <p className={`${styles['error']} form-error`}>
                                                        {commentFormErrors.content}
                                                    </p>
                                                }
                                            </div>
                                            <div className="d-flex mt-3">
                                                <button type="submit" className="btn btn-primary">
                                                    Create
                                                </button>
                                                <button onClick={onBackButtonClick} type="button" className="btn btn-primary">
                                                    Back
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}