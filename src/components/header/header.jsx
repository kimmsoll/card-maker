import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    return(
    <header className={styles.header}>
        <img className={styles.img} src="../images/logo.png" alt="header-img" />
        <h1 className={styles.title}>Business Card Maker</h1>
        {onLogout &&         
        <button className={styles.logout} onClick={onLogout}>Logout</button>
        }
    </header>
    );
}

export default Header;