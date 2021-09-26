import styles from './login.module.css';

import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Login = ({authService}) => {
    const history = useHistory();
    const goToMaker = userId => {
        history.push({
            pathname: "/maker",
            state : {id: userId}
        });
    };

    const onLogin = event => {
        authService //
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid))
        .catch((error)=>console.log(error));
    };

    useEffect(()=>{
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    });

    return(
    <>
    <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <button className={styles.google} onClick={onLogin}>Google</button>
        <button className={styles.github} onClick={onLogin}>Github</button>
    </section>
    </>
    );
}

export default Login;