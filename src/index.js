/*
Bootstrap & Font-Awesome CSS Files
*/
import '@fortawesome/fontawesome-free/css/all.css';
import 'mdbootstrap/css/bootstrap.css';
//import 'mdbootstrap/css/mbd.css';
import './style.css'; //customized bootstrapstyles






import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //customized reactstyles
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
