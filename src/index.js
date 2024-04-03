import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommnetList from './ch_03/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <CommnetList />
    </div>
);

reportWebVitals();
