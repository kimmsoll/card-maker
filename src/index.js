import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import ImgUploader from './service/img-uploader';
import Avatar from './components/avatar/avatar';

const authService = new AuthService(firebaseApp);
const imgUploader = new ImgUploader();
const FileInput = props => (
  <Avatar {...props} ImgUploader={imgUploader}/>
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);
