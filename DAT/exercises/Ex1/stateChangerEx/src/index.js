import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateChanger from './StateChanger';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StateChanger name="My State Changer"/>, document.getElementById('root'));
registerServiceWorker();
