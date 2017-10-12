import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import StateChanger from './StateChanger';
import Converter from './Converter';
import { BrowserRouter } from 'react-router-dom';
import RoutingDemo from './RoutingDemo';
import CarApp from './CarApp';

ReactDOM.render(<CarApp/>, document.getElementById('root'));

{/* Use this for router demo
 (<BrowserRouter>
 <RoutingDemo />
 </BrowserRouter>)
 */}