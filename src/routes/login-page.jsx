import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Login from '../components/login/login';
import styles from './login-page.module.css';

const LoginPage = ({authService}) => {
    return (
        <div className={styles.body}>
        <div className={styles.main}>
            <Header
            authService={authService}></Header>
            <Login
            authService={authService}></Login>
            <Footer></Footer>
        </div>
        </div>
    );
}

export default LoginPage;