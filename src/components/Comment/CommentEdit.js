import { Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import * as commentService from '../../services/commentService';

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import styles from '../Comment/CommentEdit.module.css';

export const CommentEdit = ({
    show,
    close,
    onCommentEdit,
    resortId,
}) =>{

    const { userId, token } = useContext(AuthContext);

    const { formValues, onSubmit, formChangeHandler, changeValues } = useForm({ content: '', author: '', appUserId: ''}, onCommentEdit);

    useEffect(() => {
        commentService.getComment(resortId, userId, token)
            .then(result => {
                changeValues(result);
            });
    }, [resortId, userId, token, changeValues]);
    
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

    return(
        <Modal size="lg" show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Edit comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="w-100">
                    <form onSubmit={onSubmit} method="PUT">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="content">Edit your comment</label>
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
                                Edit
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
};