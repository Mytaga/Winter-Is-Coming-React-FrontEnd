import { useNavigate } from "react-router-dom";

import styles from '../Errors/RegisterError.module.css'

export const RegisterError = () => {
    const navigate = useNavigate();

    const onRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className={styles['body']}>
            <div className={styles['header']} >
                <h1>This email already exists in the database....</h1>
                <p>Try to register with a different one... </p>
            </div>
            <div className={styles['button']}>
                <button className={`${styles['register']} btn btn-lg btn-light`} onClick={onRegisterClick}>Register</button>
            </div>
        </div>
    );
}