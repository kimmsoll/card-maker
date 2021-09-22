import styles from './login.module.css';

import React from 'react';

const Login = () => {
    return(
    <section className={styles.login}>
    <h1>Login</h1>
    <button>Google</button>
    <button>Github</button>
    </section>
    );
}

export default Login;