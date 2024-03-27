import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './ch_03/Clock';

setInterval(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Clock />);
}, 1000);

reportWebVitals();
