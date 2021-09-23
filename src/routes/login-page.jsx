import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Login from '../components/login/login';
import styles from './login-page.module.css';

const LoginPage = ({authService}) => {
    return (
        <section className={styles.loginPage}>
            <Header></Header>
            <Login authService={authService}></Login>
            <Footer></Footer>
        </section>
    );
}

export default LoginPage;