import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './global.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
