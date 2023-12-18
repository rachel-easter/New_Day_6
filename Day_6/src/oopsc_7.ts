//Abstract class:
//we cannot create an object for the class
//we cannot implement the method definition
//it all be done in its derived class
// Abstract class
abstract class Shape {
    Name: string;
    Color: string;

    constructor(name: string, color: string) {
        this.Name = name;
        this.Color = color;
    }

    abstract calculateArea(): number;
}

// Derived class (Circle)
class Circle extends Shape {
    radius: number;

    constructor(radius: number, name: string, color: string) {
        super(name, color);
        this.radius = radius;
    }

    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
    }
}

// Create an instance of the Circle class
const circleObj = new Circle(2, "Circle", "Blue");

// Calculate and display the area
const areaResult: number = circleObj.calculateArea();
console.log(`The area of the ${circleObj.Color} ${circleObj.Name} is ${areaResult}`);
