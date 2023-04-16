import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

import { ErrorToast } from '../Errors/ErrorToast';
import styles from './Login.module.css';

export const Login = () => {


  const { onLoginSubmit, showError, onErrorClose, errorMessage } = useContext(AuthContext);

  const { formValues, formChangeHandler, onSubmit } = useForm({ email: '', password: '' }, onLoginSubmit);

  return (
    <div className={styles['wrapper']}>
      <ErrorToast
        show={showError}
        close={onErrorClose}
        errorMessage={errorMessage}
      />
      <div className={styles['formContent']}>
        <h2 className={styles['active']}> Login</h2>
        <form onSubmit={onSubmit} method="POST">
          <input className={styles['fadeIn-second']}
            type="text"
            id="login"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={formChangeHandler} />
          <input className={styles['fadeIn-third']}
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={formChangeHandler} />
          <input type="submit" className={styles['fadeIn-fourth']} value="Log In" />
        </form>
        <div className={styles['formFooter']}>
          <a className={styles['underlineHover']} href="/forgot">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
