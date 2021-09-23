import styles from './login.module.css';

import React from 'react';

const Login = ({authService}) => {
    const onLogin = event => {
        authService //
        .login(event.currentTarget.textContent)
        .then(console.log("success!"))
        .catch((error)=>console.log(error));
    }
    return(
    <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <button className={styles.google} onClick={onLogin}>Google</button>
        <button className={styles.github}>Github</button>
    </section>
    );
}

export default Login;