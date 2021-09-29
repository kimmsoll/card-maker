import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Maker from '../components/maker/maker';
import Preview from '../components/preview/preview';
import styles from './home.module.css';

const Home = ({authService}) => {
    let [cards, setCards] = useState([
        {   name: "leeno",
            company : "jyp",
            color : "colorful",
            title : "main dancer",
            email : "leeno@skz.com",
            message : "leeknow is cute",
            fileName : "leeknow",
            fileURL : ' ',
            id : 1
        },
        {   name: "hyun",
            company : "jyp",
            color : "light",
            title : "hwangjual",
            email : "hyunjin@skz.com",
            message : "lovestay",
            fileName : "hyun",
            fileURL : ' ',
            id : 2
        },
    ]);

    const onAdd = (card) => {
        const newCards = [...cards, card];
        setCards(newCards);
    };

    return(
        <div className={styles.home}>
            <Header authService={authService}/>
            <div className={styles.main}>
                <Maker cards={cards} onAdd={onAdd}/>
                <Preview cards={cards}/>
            </div>
            <div className={styles.footer}>
            <Footer/>
            </div>
        </div>
    );
}
export default Home;