class Creature {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    breathe(){

    }

    getStatus(){

    }
}

class Person extends Creature {
    constructor(name, age, adress, numberID, isRunning){
        super(name, age);
        this.tired = 0;
        this.adress = adress;
        this.numberID = numberID;
        this.isRunning = isRunning;
    }

    breathe(){
        if(this.isRunning){
            this.tired += 1;
        }
        console.log(`${this.name} is breathing.`)
    }

    run(){
        this.isRunning = true;
        this.breathe();
    }

    stopRunning(){
        this.isRunning = false;
        this.breathe()
    }

    rest(){
        this.tired = 0;
        this.isRunning = false;    
    }

    walk(){
        if(this.isRunning){
            this.isRunning = false;
        }
        this.breathe()
    }

    getStatus(){
        console.log(`${this.name} is ${this.age} years old and he is ${this.tired} % tired.`)
    }
}

class Animal extends Creature {
    constructor(name, age, color){
        super(name, age);
        this.color = color;
        if(this.constructor === Animal){
            throw new Error(`Class Animal cannot be instantiated.`)
        }
    }

    breathe(){
        console.log(`${this.name} is breathing.`)
    }

    getStatus(){
        console.log(`The color of ${this.name} is ${this.color}.`)
    }

    sound(){

    }
}

class Dog extends Animal {
    constructor(name, age, color, breed){
        super(name, age, color);
        this.breed = breed;
    }

    sound(){
        console.log(`The sound he makes is bow bow.`)
    }
}

class Cat extends Animal {
    constructor(name, age, color, breed){
        super(name, age, color);
        this.breed = breed;
    }

    sound(){
        console.log(`The sound he makes is meow meow.`)
    }
}

let creatures = [];

let dog = new Dog("Ivan", 8, 'brown', 'buldog');
let cat = new Cat('Maria', 6, 'white', 'sphinx');
let person = new Person('Sasho', 31, 'Sofia', 6464);

creatures.push(dog, cat, person);

person.run();
person. run();

creatures.forEach((el) => el.getStatus());
