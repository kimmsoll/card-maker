import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Maker from '../components/maker/maker';
import Preview from '../components/preview/preview';
import styles from './home.module.css';

const Home = ({authService}) => {
    return(
        <div className={styles.home}>
            <Header authService={authService}/>
            <div className={styles.main}>
                <Maker/>
                <Preview/>
            </div>
            <div className={styles.footer}>
            <Footer/>
            </div>
        </div>
    );
}
export default Home;