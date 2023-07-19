import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/main.css'
import { BrowserRouter } from 'react-router-dom'

document.title='Argent Bank - Home Page'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

