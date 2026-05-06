//Animal class example

class Animal{
    constructor(name){
        this.name = name;
    };
    speak(){
        console.log(`${this.name} makes a sound`);
    };
};

const dog = new Animal("Jhonny");
dog.speak();

const cat = new Animal("Oscar");
cat.speak();

//Car class Example

class car{
    constructor(brand,model,colour){
        this.brand = brand;
        this.model = model;
        this.colour = colour;
    };
    print(){
        console.log(`It is a ${this.brand} ${this.model} car of ${this.colour} colour`);
    };
};

const car1 = new car("Tata","Suv","Black");
car1.print();


const car12 = new car("Hyundai","Sedan","White");
car12.print();