import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './ch_03/wel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Welcome name="진석" />
        <Welcome name="KJS" />
        <Welcome name="Seok" />
    </div>
);

reportWebVitals();
