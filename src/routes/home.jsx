import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Maker from '../components/maker/maker';
import Preview from '../components/preview/preview';
import styles from './home.module.css';

const Home = ({authService}) => {
    let [cards, setCards] = useState({
    "1" : {   
        name: "leeno",
        company : "jyp",
        color : "colorful",
        title : "main dancer",
        email : "leeno@skz.com",
        message : "leeknow is cute",
        fileName : "leeknow",
        fileURL : " ",
        id : "1"
    },
    "2" : {   
        name: "hyun",
        company : "jyp",
        color : "light",
        title : "hwangjual",
        email : "hyunjin@skz.com",
        message : "lovestay",
        fileName : "hyun",
        fileURL : " ",
        id : "2"
    }
    }   
    );

    const onAddandUpdate = (card) => {
        setCards(cards => {
            let newCards = {...cards};
            newCards[card.id] = card;
            return newCards;
        });
    };
    const onDelete = (card) => {
        setCards(cards => {
            let newCards = {...cards};
            delete newCards[card.id];
            return newCards;
        })
    }
    return(
        <div className={styles.home}>
            <Header authService={authService}/>
            <div className={styles.main}>
                <Maker cards={cards}
                onAdd={onAddandUpdate}
                onUpdate={onAddandUpdate}
                onDelete={onDelete}/>
                <Preview cards={cards}/>
            </div>
            <div className={styles.footer}>
            <Footer/>
            </div>
        </div>
    );
}
export default Home;