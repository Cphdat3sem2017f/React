/**
 * Created by tha on 12-10-2017.
 */
const URL = "http://localhost:4000/cars"
class CarStore{
    constructor(){
        this._cars = [];
    }

    get cars() {
        return this._cars;
    }

    loadCars(callback) {
        fetch(URL).
        then(res => res.json()).
        then(data => {
            this._cars = data;
            if (callback) {
                callback(data);
            }
        }).catch((err)=>{
            console.log("Could not fetch data from server. Is the backend running?")
            callback(null);
        })
        return this._cars;
    }


    get emptyCar() {
        return {
            id: "", year: "", registered: "", make: "", model: "",
            description: "", price: ""
        };
    }

    deleteCar(id, callback) {
        fetch(URL + "/" + id, {
            method: 'delete'
        }).then(response =>
            response.json()
        .then(deletedCar => {
            for (var i = 0; i < this._cars.length; i++) {
                if (this._cars[i].id === id) {
                    this._cars.splice(i, 1);
                }
            }
            callback();
            }))
    }

    addEditCar(car, callback) {
        var method = !Number.isInteger(car.id) ? "post" : "put";
        var URL_Post_Put = (method === "put") ? URL+"/"+car.id : URL;
        fetch(URL_Post_Put, {
            method: method,
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(car)
        }).then(res => res.json())
            .then(newCar => {
                if (method === "post") {
                    this.addCar(car);
                }
                else {
                    this.editCar(car);
                }
                callback(newCar);
            })
    }


    editCar(car) {
        for (var i = 0; i < this._cars.length; i++) {
            if (this._cars[i].id === car.id) {
                this._cars[i] = Object.assign({}, car);
            }
        }
    }

    addCar(car) {
        if (!Number.isInteger(car.id)) {
            if (!car.id) { //REAL DB will supply id
                car.id = this._nextId++;
            }
            this._cars.push(Object.assign({}, car));
        } else {
            throw new Error("Cannot save a car with existing ID");
        }
    }
}

export default CarStore;

