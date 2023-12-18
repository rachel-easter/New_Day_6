"use strict";
// Base class
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
    stopEngine() {
        console.log(`${this.brand} ${this.model} engine stopped.`);
    }
}
// Derived class 1
class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.numberOfDoors = doors;
    }
    openTrunk() {
        console.log(`${this.brand} ${this.model} trunk opened.`);
    }
}
// Derived class 2
class Bike extends Vehicle {
    constructor(brand, model, hasBasket) {
        super(brand, model);
        this.hasBasket = hasBasket;
    }
    ringBell() {
        console.log(`${this.brand} ${this.model} bell ringing.`);
    }
}
// Creating instances
const myCar = new Car('Hyndai', 'i-10', 4);
const myBike = new Bike('Honda', 'CBR', true);
// Using inherited methods
myCar.startEngine();
myCar.openTrunk();
myCar.stopEngine();
myBike.startEngine();
myBike.ringBell();
myBike.stopEngine();
