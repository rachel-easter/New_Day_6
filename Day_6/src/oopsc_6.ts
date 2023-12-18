import * as readline from 'readline-sync';
class Things {
    static Name: string;
    static price: number = 2;//each cost is static

    static Details(count: number): number {
        this.Name = "Sharpy";
        this.price = count * this.price;
        return this.price;
    }
}

const numberOfPencils = parseInt(readline.question("Enter the count of the pencils: ")); // You can change this value dynamically
const totalCost = Things.Details(numberOfPencils);

console.log(`The Price of ${Things.Name} for ${numberOfPencils} pencils is ${totalCost}`);
