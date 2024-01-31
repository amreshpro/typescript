
interface Person {
    firstName: string,
    lastName: string,
    age: number,
}

const examplePerson: Person = {
    firstName: "Amresh",
    lastName: "Maurya",
    age: 23
}

console.log(examplePerson)

// interface for function 
interface MathOperation {
    (x: number, y: number): number;
}

// usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2))

interface Vehicle{
    start():void;
    stop():void;
}

class Car implements Vehicle {
    start(): void {
        console.log('car is starting')
    }
    stop(): void {
        console.log('car is stopped')
    }
}


const myCar = new Car;
myCar.start();
myCar.stop();