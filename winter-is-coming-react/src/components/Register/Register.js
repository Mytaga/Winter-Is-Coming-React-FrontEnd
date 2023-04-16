import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../contexts/AuthContext';


import styles from './Register.module.css'

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);

    const [formErrors, setFormErrors] = useState({
        email: '',
        firstName: '',
        lastName: '',
        username: '',
    });

    const { formValues, formChangeHandler, onSubmit } = useForm(
        {
            email: '',
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
        }, onRegisterSubmit);

    const formValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'firstName' && (value.length < 2 || value.length > 30)) {
            errors.firstName = 'First name should be between 2 and 30 characters';
        }

        if (e.target.name === 'lastName' && (value.length < 2 || value.length > 30)) {
            errors.lastName = 'Last name should be between 2 and 30 characters';
        }

        if (e.target.name === 'username' && (value.length < 2 || value.length > 50)) {
            errors.username = 'Username should be between 1 and 50 characters';
        }

        setFormErrors(errors);
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['formContent']}>
                <h2 className={styles['active']}> Register </h2>
                <form onSubmit={onSubmit} method="POST">
                    <input className={styles['fadeIn-second']}
                        type="text"
                        id="register"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={formChangeHandler}
                        onBlur={formValidate} />
                    {formErrors.email &&
                        <p className={`${styles['error']} form-error`}>
                            {formErrors.email}
                        </p>
                    }
                    <input className={styles['fadeIn-sixth']}
                        type="text"
                        id="register"
                        name="firstName"
                        placeholder="First Name"
                        value={formValues.firstName}
                        onChange={formChangeHandler}
                        onBlur={formValidate} />
                    {formErrors.firstName &&
                        <p className={`${styles['error']} form-error`}>
                            {formErrors.firstName}
                        </p>
                    }
                    <input className={styles['fadeIn-seventh']}
                        type="text"
                        id="register"
                        name="lastName"
                        placeholder="Last Name"
                        value={formValues.lastName}
                        onChange={formChangeHandler}
                        onBlur={formValidate} />
                    {formErrors.lastName &&
                        <p className={`${styles['error']} form-error`}>
                            {formErrors.lastName}
                        </p>
                    }
                    <input className={styles['fadeIn-eight']}
                        type="text"
                        id="register"
                        name="username"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={formChangeHandler}
                        onBlur={formValidate} />
                    {formErrors.username &&
                        <p className={`${styles['error']} form-error`}>
                            {formErrors.username}
                        </p>
                    }
                    <input className={styles['fadeIn-third']}
                        type="text"
                        id="register"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={formChangeHandler} />
                    <input className={styles['fadeIn-fifth']}
                        type="text"
                        id="register"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formValues.confirmPassword}
                        onChange={formChangeHandler} />
                    <input type="submit" className={styles['fadeIn-fourth']} value="Register" />
                </form>
                <div className={styles['formFooter']}>
                    <Link to={"/login"} className={styles['underlineHover']}>Already registered?</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;