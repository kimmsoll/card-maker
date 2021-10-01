import React from 'react';
import styles from './avatar.module.css';
import { useRef } from 'react';

const Avatar = ({ImgUploader, name, onFileChange}) => {
  const inputRef = useRef();
  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }
  const onChange = async (event) => {
    const uploaded = await ImgUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
    }    
  return(
      <>
      <div className={styles.container}>
        <input 
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.input}
        name="fileInput"
        onChange={onChange}
        ></input>
        <button className={styles.button} onClick={onBtnClick}>
          {name || "No File"}
        </button>
      </div>
      </>
    );
}

export default Avatar;