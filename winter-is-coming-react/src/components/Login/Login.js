import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['formContent']}>
        <h2 className={styles['active']}> Sign In </h2>
        <form>
          <input type="text" id="login" className={styles['fadeIn-second']} name="login" placeholder="Email" />
          <input type="text" id="password" className={styles['fadeIn-third']} name="login" placeholder="Password" />
          <input type="submit" className={styles['fadeIn-fourth']} value="Log In" />
        </form>
        <div className={styles['formFooter']}>
          <a className={styles['underlineHover']} href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;