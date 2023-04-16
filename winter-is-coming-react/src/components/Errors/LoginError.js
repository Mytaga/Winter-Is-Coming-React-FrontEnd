import { useNavigate } from "react-router-dom";

import styles from "../Errors/Login.Error.module.css";

export const LoginError = () => {
    const navigate = useNavigate();

    const onLoginClick = () => {
        navigate("/login");
    };

    return (
        <div className={styles['body']}>
            <div className={styles['header']} >
                <h1>Credentials don't match....</h1>
                <p>Try again... </p>
            </div>
            <div className={styles['button']}>
                <button className={`${styles['register']} btn btn-lg btn-light`} onClick={onLoginClick}>Login</button>
            </div>
        </div>
    );
}