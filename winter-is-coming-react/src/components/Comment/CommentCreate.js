import { useNavigate, useParams } from "react-router-dom";

import styles from "../Comment/CommentCreate.module.css";

export const CommentCreate = ({
    commentFormValues,
    commentFormErrors,
    commentFormValidate,
    commentFormChangeHandler,
    onCommentCreateSubmit,
}) => {

    const navigate = useNavigate();
    const { resortId } = useParams();
    const onBackButtonClick = () => {
        navigate(`/resorts/${resortId}`);
    };

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
                                        <div className="form-outline">
                                            <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                                            <label className="form-label" for="textAreaExample">What is your view?</label>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <button type="button" className="btn btn-danger">
                                                Send <i className="fas fa-long-arrow-alt-right ms-1"></i>
                                            </button>
                                            <button onClick={onBackButtonClick} type="button" className="btn btn-danger">
                                                Back <i className="fas fa-long-arrow-alt-right ms-1"></i>
                                            </button>
                                        </div>
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