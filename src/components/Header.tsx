import styles from './Header.module.css';

import igniteLogoSvg from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogoSvg} className={styles.logo} alt="Ignite Logo" />
        </header>
    );
}