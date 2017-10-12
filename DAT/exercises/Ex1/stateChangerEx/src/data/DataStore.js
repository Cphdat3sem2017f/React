/**
 * Created by tha on 12-10-2017.
 */
const URL = 'http://localhost:4000/cars';
class DataStore{
    constructor(){
        this.cars = [];
        this.createCar = this.createCar.bind(this);
        this.loadData = this.loadData.bind(this);
    }
    loadData(callback){
        fetch(URL, {method: 'GET'}).then(function(data){
            return data.json();
        }).then(function(data){
            console.log(data);
            callback(data);
        });
    }
    createCar(car, callback){
        fetch(URL,
            {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(car)
            }
        ).then(function(data){
            return data.json();
        }).then(()=>this.loadData(callback));
    }
}
export default DataStore;