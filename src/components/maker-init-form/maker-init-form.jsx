import React, { useRef } from 'react';
import styles from './maker-init-form.module.css';
import Button from '../button/button';
import Avatar from '../avatar/avatar';

const MakerInitForm = ({onAdd}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const colorRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();

    const handleAdd = (event) => {
        event.preventDefault();
        const card = {
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            color : colorRef.current.value,
            title : titleRef.current.value || '',
            email : emailRef.current.value || '',
            message : messageRef.current.value || '',
            fileName : ' ',
            fileURL : ' ',
            id : new Date()
        };
        onAdd(card);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className={styles.card}>
        <input ref={nameRef} className={styles.input} name="name" type="text" placeholder="Name"></input>
        <input ref={companyRef} className={styles.input} name="company" type="text" placeholder="Company"></input>
        <select ref={colorRef} className={styles.select} name="color">
            <option  value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
        </select>
        <input ref={titleRef} className={styles.input} name="title" type="text" placeholder="Title"></input>
        <input ref={emailRef} className={styles.input} name="email" type="email" placeholder="Email"></input>
        <textarea ref={messageRef} className={styles.textarea} name="message" rows="2" defaultValue="write message"></textarea>
        <div className={styles.buttons}>
            <div className={styles.fileInput}>
                <Avatar/>
            </div>
            <Button name="Add" onClick={handleAdd}></Button>
        </div>
        </form>
    )
}

export default MakerInitForm;