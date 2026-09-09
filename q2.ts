class Vehicle{
    constructor(public brand : string, public speed: number){}
}

class Car extends Vehicle{
    doors : number;
    constructor(brand: string, speed : number , doors: number){
        super(brand,speed,);
        this.doors = doors;
    }
}

const vehicle1 = new Vehicle("Toyota",120);
console.log(vehicle1.brand);
console.log(vehicle1.speed);
const car1 = new Car("Toyota",120,4);
console.log(car1.doors);

