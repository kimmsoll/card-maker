import React from 'react';
import styles from './maker-form.module.css';
import Button from '../button/button';
import Avatar from '../avatar/avatar';

const MakerForm = ({card, onUpdate, onDelete}) => {
    const { name, company, title, email, message, color } = card;

    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(card);
    };

    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        onUpdate({...card,
            [event.currentTarget.name]:event.currentTarget.value});
    }

    return (
        <form className={styles.card}>
        <input onChange={onChange} className={styles.input} name="name" type="text" placeholder={name || "Name"}></input>
        <input onChange={onChange} className={styles.input} name="company" type="text" placeholder={company || "Company"}></input>
        <select onChange={onChange} className={styles.select} name="color" value={color}>
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
        </select>
        <input onChange={onChange} className={styles.input} name="title" type="text" placeholder={title || "Title"}></input>
        <input onChange={onChange} className={styles.input} name="email" type="email" placeholder={email || "Email"}></input>
                <textarea onChange={onChange} className={styles.textarea} name="message" rows="2" defaultValue={message}></textarea>
            <div className={styles.buttons}>
        <div className={styles.fileInput}>
            <Avatar/>
        </div>
        <Button name="Delete" onClick={handleDelete}></Button>
            </div>
        </form>
    )
}

export default MakerForm;