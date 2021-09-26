import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({authService}) => {
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };
    
    useEffect(()=>{
        authService.onAuthChange(user => {
            // 계정이 없는 사용자가 /maker 화면으로 가는 것을 막는다
            if(!user){
                history.push("/");
        }})
    });

    return(
    <header className={styles.header}>
        <img src="../images/logo.png" alt="header-img" />
        <h1 className={styles.title}>Business Card Maker</h1>
        {history.location.pathname === "/maker" &&
        <button className={styles.logout} onClick={onLogout}>Logout</button>
        }
    </header>
    );
}

export default Header;