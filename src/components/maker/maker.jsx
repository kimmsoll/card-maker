import React from 'react';
import styles from './maker.module.css';
import MakerForm from '../maker-form/maker-form';

const Maker = ({cards}) => {
    return(
        <section className={styles.maker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.makers}>
                {cards.map((card) => <MakerForm card={card}/>)}
            </div>
        </section>
    );
}

export default Maker;