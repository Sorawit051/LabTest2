class Student{
    name: string;
    age: number;

    constructor(n: string, a:number){
        this.name = n;
        this.age = a;
    }
}

const student1 = new Student("BANK",19);
console.log(student1.name);
console.log(student1.age);