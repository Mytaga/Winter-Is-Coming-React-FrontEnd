import styles from "../Profile/Profile.module.css";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as accountService from "../../services/accountService";

export const Profile = () => {

    const { onBackButtonClick, userId, token } = useContext(AuthContext);
    const [user, setUser] = useState({})

    const navigate = useNavigate();

    const onFavClick = () => {
        navigate('/myResorts');
    }

    useEffect(() => {
        accountService.getProfile(userId, token)
            .then(user => {
                setUser(user)
            })
            .catch(error => console.log(error))
    }, [userId, token]);

    return (
        <div className={`${styles['main-body']} container`}>
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className={`${styles['body']} card`}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={user.imageUrl} alt="profile-pic" className="rounded-circle" width="150" />
                                    <div className="mt-3 text-dark">
                                        <h3>{user.userName}</h3>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-primary" onClick={onFavClick}>
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
                                        {user.firstName}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Last Name</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {user.lastName}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Email</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {user.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Username</h5>
                                    </div>
                                    <div className={`${styles['user-info']} col-sm-9`}>
                                        {user.userName}
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-4">
                                    <div className="col-sm-12">
                                        <button className={`${styles['back-button']} btn btn-primary`} onClick={onBackButtonClick}>
                                            <i className="fas fa-arrow-left fa-lg"></i>
                                        </button>
                                        <button className="btn btn-primary">Update Profile</button>
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