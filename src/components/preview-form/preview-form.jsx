import React from 'react';
import styles from './preview-form.module.css';

const PreviewForm = ({card}) => {
    const defaultImg = "../images/default_logo.png";
    const {name, company, title, email, message, color, fileURL} = card;
    const url = fileURL || defaultImg;
    return(
        <div className={`${styles.card} ${getColor(color)}`}>
        <div className={styles.avatar}>
            <img src={url} alt="avatar" />
        </div>
        <div className={styles.text}>
            <h1>{name}</h1>
            <span className={`${styles.company} ${getColor(color)}`}>{company}</span>
            <span>{title}</span>
            <span>{email}</span>
            <span>{message}</span>
        </div>
        </div>
    )
}

const getColor = (color) => {
    switch(color){
        case "dark":
            return styles.dark;
        case "light":
            return styles.light;
        case "colorful":
            return styles.colorful;
        default:
        throw new Error(`unexpected color ${color}`);
    }
}

export default PreviewForm;