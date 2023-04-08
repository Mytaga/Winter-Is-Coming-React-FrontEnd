import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as accountService from "../../services/accountService";

import { AuthContext } from '../../contexts/AuthContext';
import { ProfileContext } from "../../contexts/ProfileContext";

import { UpdateProfile } from "./UpdateProfile";
import styles from "../Profile/Profile.module.css";

export const Profile = () => {

    const [showEditProfile, setEditProfile] = useState(false);
    const { setUser, userImage, username, firstname, lastname, email } = useContext(ProfileContext)
    const { onBackButtonClick, userId, token } = useContext(AuthContext);

    const navigate = useNavigate();

    const onFavClick = () => {
        navigate('/myResorts');
    }

    const onEditProfile = async (values) => {
        const result = await accountService.editProfile(userId, token, values);
        setUser(result);
        onEditClose();
    }

    const onEditProfileClick = () => {
        setEditProfile(true);
    }

    const onEditClose = () => {
        setEditProfile(false);
    }

    return (
        <div className={`${styles['main-body']} container`}>
            <UpdateProfile
                show={showEditProfile}
                close={onEditClose}
                onEditProfile={onEditProfile}
            />
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className={`${styles['body']} card`}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={userImage} alt="profile-pic" className="rounded-circle" width="178" />
                                    <div className="mt-3 text-dark">
                                        <h3>{username}</h3>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-lg btn-primary" onClick={onFavClick}>
                                            Favourite Resorts
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={`${styles['body']} card`}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">First Name</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {firstname}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Last Name</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {lastname}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Email</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Username</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {username}
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-4">
                                    <div className="col-sm-12">
                                        <button className={`${styles['back-button']} btn btn-lg btn-primary`} onClick={onBackButtonClick}>
                                            <i className="fas fa-arrow-left fa-lg"></i>
                                        </button>
                                        <button className="btn btn-lg btn-primary" onClick={onEditProfileClick}>Update Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};