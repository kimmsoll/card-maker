import React from 'react';
import styles from './maker.module.css';
import MakerForm from '../maker-form/maker-form';
import MakerInitForm from '../maker-init-form/maker-init-form';

const Maker = ({cards, onAdd, onUpdate, onDelete}) => {
    return(
        <section className={styles.maker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.makers}>
                {Object.keys(cards).map((key) => 
                    <MakerForm key={key} card={cards[key]} onUpdate={onUpdate} onDelete={onDelete}/>)}
                <MakerInitForm onAdd={onAdd}/>
            </div>
        </section>
    );
}

export default Maker;