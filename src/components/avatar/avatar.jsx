import React, { useState } from 'react';
import styles from './avatar.module.css';
import { useRef } from 'react';

const Avatar = ({ImgUploader, name, onFileChange}) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await ImgUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  }

  const getColor = (name) => {
    if(name){
      return styles.yes;
    }else{
      return styles.no;
    }
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
        {!loading && 
        <button className={`${styles.button} ${getColor(name)}`} onClick={onBtnClick}>
        {name || "No File"}
        </button>
        }
        {loading &&
        <button className={styles.loading}>
          <div className={styles.spinner}></div>
        </button>
        }
      </div>
      </>
    );
}

export default Avatar;