import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
    constructor(props){
        super();
        this.state = {name: props.name};
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
//const App = (props)=>{ return <h1>{props.name}</h1> };
// const App2 = ()=>{ return <h1>Hej fra App</h1> };

export default App;
//export {App1, App2}
