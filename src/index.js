import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

import { API_BASE_URL } from './config'

// Axios default configuration
axios.defaults.baseURL = API_BASE_URL
const token = localStorage.getItem('accessToken');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// TODO: Write axios interceptor to handle refresh token

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
