/**
 * Created by tha on 09-10-2017.
 */
import React, {Component} from 'react';

export default class StateChanger extends Component{
    constructor(){
        super(); //a child class constructor cannot make use of 'this' until super() has been called
        this.state = { status: 'green' }; //initial state is setup in the constructor
        this.changeGreen = this.changeGreen.bind(this); //Bind 'this' to the function: Now inside the function 'this' refers to the class
        this.changeRed = this.changeRed.bind(this);
    }
    changeGreen(){
        this.setState({status: 'green'});
    }
    changeRed(){
        this.setState({status: 'red'});
    }
    render(){
        return(
            <div>
                <h1>The state changer: </h1>
                <h2 style={{color: `${this.state.status}`}}>{this.props.name} is now: {this.state.status}</h2>
                <img src="img/boat1.jpg" />
                <img src={ require('./img/boat1.jpg') } />
                <button onClick={this.changeGreen}>Change to Green</button><span> </span>
                <button onClick={this.changeRed}>Change to Red</button>
            </div>
        );
    }
}