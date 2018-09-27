import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import StateChanger from './components/StateChanger';
import Converter from './components/Converter';
import { BrowserRouter } from 'react-router-dom';
import RoutingDemo from './components/RoutingDemo';
import CarApp from './components/CarApp';
import Data3Ways from './components/Data3Ways';
import TicTacToe from './games/tictactoe/TicTacToeGame';

// ReactDOM.render(<CarApp/>, document.getElementById('root'));
// ReactDOM.render(<TicTacToe/>, document.getElementById('root'));
ReactDOM.render(<Data3Ways/>, document.getElementById('root'));

{/* Use this for router demo
 (<BrowserRouter>
 <RoutingDemo />
 </BrowserRouter>)
 */}