/**
 * Created by tha on 12-10-2017.
 */
import React, { Component } from 'react';
import DataStore from './data/DataStore';
const dataStore = new DataStore();
export default class CarApp extends Component {
    constructor(){
        super();
        this.store = dataStore;
        this.state={_data: []};
        this.load = this.store.loadData;
        this.load = this.load.bind(this);
        this.load(function(data){
            //const _data = data;
            this.setState({_data:data});
        }.bind(this));
        this.createCar = this.createCar.bind(this);
    }
    createCar() {
        const car = {
            "make": "Mercedes",
            "model": "K300",
            "year": 1948
        };
        this.store.createCar(car, function(data){
            this.load(function(data){
                this.setState({_data:data});
            }).bind(this);
        });
    }

    render(){
        const cars = this.state._data.map(function(car){return <h4>{car.model}</h4>});
        return <div><button onClick={this.createCar}>create a car</button>{cars}</div>
    }
}