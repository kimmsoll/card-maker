import React from 'react';
import styles from './maker.module.css';
import MakerForm from '../maker-form/maker-form';
import MakerInitForm from '../maker-init-form/maker-init-form';

const Maker = ({cards, FileInput, onAdd, onUpdate, onDelete}) => {
    return(
        <section className={styles.maker}>
            <h1 className={styles.title}>Card Maker</h1>
            {Object.keys(cards).map((key) => 
                <MakerForm key={key}
                FileInput={FileInput}
                card={cards[key]}
                onUpdate={onUpdate}
                onDelete={onDelete}/>)}
            <MakerInitForm FileInput={FileInput} onAdd={onAdd}/>
        </section>
    );
}

export default Maker;