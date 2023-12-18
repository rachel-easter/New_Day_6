// Base class
class Vehicle {
    constructor(public brand: string, public model: string) {}

    startEngine(): void {
        console.log(`${this.brand} ${this.model} engine started.`);
    }

    stopEngine(): void {
        console.log(`${this.brand} ${this.model} engine stopped.`);
    }
}

// Derived class 1
class Car extends Vehicle {
    private numberOfDoors: number;

    constructor(brand: string, model: string, doors: number) {
       
        super(brand, model);
        this.numberOfDoors = doors;
       
    }

    openTrunk(): void {
        console.log(`${this.brand} ${this.model} trunk opened.`);
    }
}

// Derived class 2
class Bike extends Vehicle {
    private hasBasket: boolean;

    constructor(brand: string, model: string, hasBasket: boolean) {
        super(brand, model);
        this.hasBasket = hasBasket;
    }

    ringBell(): void {
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
