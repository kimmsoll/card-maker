import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Maker from '../components/maker/maker';
import Preview from '../components/preview/preview';
import styles from './home.module.css';

const Home = ({authService, FileInput, cardRepository}) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

    const onLogout = () => {
        authService.logout();
    };
    
    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });
        return () => stopSync();
    }, [userId, cardRepository])

    useEffect(()=>{
        authService.onAuthChange(user => {
            // 계정이 없는 사용자가 /maker 화면으로 가는 것을 막는다
            if(user){
                setUserId(user.uid);
            } else {
                history.push("/");
            }
    })
    },[authService, userId, history]);
    
    const onAddandUpdate = (card) => {
        setCards(cards => {
            let newCards = {...cards};
            newCards[card.id] = card;
            return newCards;
        });
        cardRepository.saveCard(userId, card);
    };

    const onDelete = (card) => {
        setCards(cards => {
            let newCards = {...cards};
            delete newCards[card.id];
            return newCards;
        });
        cardRepository.removeCard(userId, card);
    }

    return(
        <div className={styles.home}>
            <Header onLogout={onLogout}/>
            <div className={styles.main}>
                <Maker cards={cards}
                FileInput={FileInput}
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