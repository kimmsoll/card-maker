import React, { useRef, useState } from 'react';
import styles from './maker-init-form.module.css';
import Button from '../button/button';

const MakerInitForm = ({onAdd, FileInput}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const colorRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();
    const [file, setFile] = useState({fileName: null, fileURL: null});

    const onFileChange = (file) => {
        setFile({
            fileName: file.name,
            fileURL: file.url,
        });
    };

    const handleAdd = (event) => {
        event.preventDefault();
        const card = {
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            color : colorRef.current.value,
            title : titleRef.current.value || '',
            email : emailRef.current.value || '',
            message : messageRef.current.value || '',
            fileName : file.fileName || '',
            fileURL : file.fileURL || '',
            id : new Date()
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null });
        onAdd(card);
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
                <FileInput name={file.fileName} onFileChange={onFileChange}/>
            </div>
            <Button name="Add" onClick={handleAdd}></Button>
        </div>
        </form>
    )
}

export default MakerInitForm;