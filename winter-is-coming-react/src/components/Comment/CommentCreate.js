import { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../Comment/CommentCreate.module.css";
import { useForm } from "../../hooks/useForm";

export const CommentCreate = ({
    onCommentCreate,
    show,
    close,
}) => {

    const { formValues, onSubmit, formChangeHandler } = useForm({ content: ''}, onCommentCreate);

    const [commentFormErrors, setCommentFormErrors] = useState({
        content: '',
    });

    const commentFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'content' && (value.length < 10 || value.length > 300)) {
            errors.content = 'Content must be between 10 and 300 characters';
        }

        setCommentFormErrors(errors);
    }

    return (
        <Modal size="lg" show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Add comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="w-100">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="content">Enter your comment</label>
                            <textarea className={`${styles['content']} form-control`}
                                id="content"
                                name="content"
                                type="text-area"
                                rows="4"
                                value={formValues.content}
                                onChange={formChangeHandler}
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
                            <button onClick={close} type="button" className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}