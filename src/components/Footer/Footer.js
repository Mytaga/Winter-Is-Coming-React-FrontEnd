import styles from "../Footer/Footer.module.css";

export const Footer = () => {
    return (
        <footer className={`${styles['footer']} text-center text-lg-start bg-light text-muted`}>
            <div className={`${styles['footer-content']} text-center p-4`}>
                © 2023 Copyright:
                <p className="text-reset fw-bold">Winter Is Coming</p>
            </div>
        </footer>
    );
};