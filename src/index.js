import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import ImgUploader from './service/img-uploader';
import Avatar from './components/avatar/avatar';
import CardRepository from './service/card_repository';

const authService = new AuthService(firebaseApp);
const imgUploader = new ImgUploader();
const FileInput = props => (
  <Avatar {...props} ImgUploader={imgUploader}/>
);
const cardRepository = new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App
    authService={authService}
    FileInput={FileInput}
    cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
