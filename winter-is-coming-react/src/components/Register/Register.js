import styles from './Register.module.css'

function Register() {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['formContent']}>
                <h2 className={styles['active']}> Register </h2>
                <form>
                    <input type="text" id="login" className={styles['fadeIn-second']} name="register" placeholder="Email" />
                    <input type="text" id="password" className={styles['fadeIn-third']} name="register" placeholder="Password" />
                    <input type="text" id="password" className={styles['fadeIn-fifth']} name="register" placeholder="Confirm Password" />
                    <input type="submit" className={styles['fadeIn-fourth']} value="Register" />
                </form>
                <div className={styles['formFooter']}>
                    <a className={styles['underlineHover']} href="/login">Already registered?</a>
                </div>
            </div>
        </div>
    );
}

export default Register;