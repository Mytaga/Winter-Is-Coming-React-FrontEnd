import { Modal } from "react-bootstrap";
import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import styles from "../Profile/UpdateProfile.module.css";

export const UpdateProfile = ({
    close,
    show,
    onEditProfile,
}) => {

    const {username, firstname, lastname} = useContext(AuthContext);

    const { formValues, onSubmit, formChangeHandler } = useForm(
        {
            userName: username,
            firstName: firstname,
            lastName: lastname,
            imageUrl: '',
        }
        , onEditProfile)


    const [editProfileFormErrors, setEditProfileFormErrors] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        imageUrl: '',
    });

    const editProfileFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'userName' && (value.length < 2 || value.length > 50)) {
            errors.usenName = 'Username must be between 1 and 50 characters';
        }
        if (e.target.name === 'firstName' && (value.length < 2 || value.length > 30)) {
            errors.firstName = 'Firstname must be between 2 and 30 characters';
        }
        if (e.target.name === 'lastName' && (value.length < 2 || value.length > 30)) {
            errors.lastName = 'Lastname must be between 2 and 30 characters';
        }
        if (e.target.name === 'imageUrl' && (value.length > 100)) {
            errors.imageUrl = 'Image Url must less than 100 characters';
        }

        setEditProfileFormErrors(errors);
    }

    return (
        <Modal size="lg" show={show} onHide={close}>
            <Modal.Header className={styles['header']} closeButton>
                <Modal.Title className={styles['title']}>Update Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles['content']}> 
                <div className={styles['body']}>
                    <form className={`${styles['form']}`} onSubmit={onSubmit} method="POST">
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className="form-label" htmlFor="userName">Username</label>
                            <input className={`${styles['content']} form-control`}
                                id="userName"
                                name="userName"
                                type="text"
                                value={formValues.userName}
                                onChange={formChangeHandler}
                                onBlur={editProfileFormValidate}
                            />
                            {editProfileFormErrors.userName &&
                                <p className={`${styles['error']} form-error`}>
                                    {editProfileFormErrors.userName}
                                </p>
                            }
                        </div>
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className="form-label" htmlFor="firstName">Firstname</label>
                            <input className={`${styles['content']} form-control`}
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formValues.firstName}
                                onChange={formChangeHandler}
                                onBlur={editProfileFormValidate}
                            />
                            {editProfileFormErrors.firstName &&
                                <p className={`${styles['error']} form-error`}>
                                    {editProfileFormErrors.firstName}
                                </p>
                            }
                        </div>
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className="form-label" htmlFor="lastName">Lastname</label>
                            <input className={`${styles['content']} form-control`}
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formValues.lastName}
                                onChange={formChangeHandler}
                                onBlur={editProfileFormValidate}
                            />
                            {editProfileFormErrors.lastName &&
                                <p className={`${styles['error']} form-error`}>
                                    {editProfileFormErrors.lastName}
                                </p>
                            }
                        </div>
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className="form-label" htmlFor="imageUrl">Image Url</label>
                            <input className={`${styles['content']} form-control`}
                                id="imageUrl"
                                name="imageUrl"
                                type="text"
                                value={formValues.imageUrl}
                                onChange={formChangeHandler}
                                onBlur={editProfileFormValidate}
                            />
                            {editProfileFormErrors.imageUrl &&
                                <p className={`${styles['error']} form-error`}>
                                    {editProfileFormErrors.imageUrl}
                                </p>
                            }
                        </div>
                        <div className="d-flex mt-3">
                            <button type="submit" className="btn btn-lg btn-primary">
                                Update
                            </button>
                            <button onClick={close} type="button" className="btn btn-lg btn-primary">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};