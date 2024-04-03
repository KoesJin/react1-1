import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NotificationList from './ch_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <NotificationList />
    </div>
);

reportWebVitals();
