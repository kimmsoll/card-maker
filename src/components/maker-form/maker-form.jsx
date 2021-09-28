import React from 'react';
import styles from './maker-form.module.css';
import Button from '../button/button';
import Avatar from '../avatar/avatar';

const MakerForm = ({card}) => {
    const { name, company, title, email, message, fileName} = card;
    const onSumbit = () => {};
    return (
        <form className={styles.card}>
        <input className={styles.input} name="name" type="text" placeholder={name? name : "Name"}></input>
        <input className={styles.input} name="company" type="text" placeholder={company? company: "Company"}></input>
        <select className={styles.select} name="color">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="colorful">Colorful</option>
        </select>
        <input className={styles.input} name="title" type="text" placeholder={title? title: "Title"}></input>
        <input className={styles.input} name="email" type="email" placeholder={email? email: "Email"}></input>
                <textarea className={styles.textarea} name="message" rows="2">{message}</textarea>
            <div className={styles.buttons}>
        <div className={styles.fileInput}>
            <Avatar/>
        </div>
        <Button name="Delete" onClick={onSumbit}></Button>
            </div>
        </form>
    )
}

export default MakerForm;