import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return(
    <header className={styles.header}>
        <img src="../images/logo.png" alt="header-img" />
        <h1>Business Card Maker</h1>
    </header>
    );
}

export default Header;