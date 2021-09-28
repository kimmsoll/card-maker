import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Maker from '../components/maker/maker';
import Preview from '../components/preview/preview';
import styles from './home.module.css';

const Home = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "leeno",
            company: "jyp",
            title: "main dancer",
            email: "leeknow@skz.com",
            color: "dark",
            message: "leeknow is cute",
            fileName: "leeknow",
            fileURL: "lee.png"
        },
        {
            id: 2,
            name: "leeno",
            company: "jyp",
            title: "main dancer",
            email: "leeknow@skz.com",
            color: "light",
            message: "leeknow is cute",
            fileName: "leeknow",
            fileURL: null
        },
        {
            id: 3,
            name: "leeno",
            company: "jyp",
            title: "main dancer",
            email: "leeknow@skz.com",
            color: "colorful",
            message: "leeknow is cute",
            fileName: "leeknow",
            fileURL: null
        },
    ]);
    return(
        <div className={styles.home}>
            <Header authService={authService}/>
            <div className={styles.main}>
                <Maker cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <div className={styles.footer}>
            <Footer/>
            </div>
        </div>
    );
}
export default Home;