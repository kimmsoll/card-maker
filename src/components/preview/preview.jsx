import React from 'react';
import styles from './preview.module.css';
import PreviewForm from '../preview-form/preview-form';

const Preview = ({cards}) => {
    return(
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            <div className={styles.previews}>
                {cards.map((card)=><PreviewForm card={card}/>)}
            </div>
        </section>
    );
}

export default Preview;