//Example 1

class user{
    constructor(name){
        this.name = name;
    }
    login(){
        console.log(`${this.name} has logged in`);
    };
};

class admin extends user{
    constructor(name,role){
        super(name);
        this.role = role;
    };
    login(){
        super.login();
        console.log(`The role is ${this.role}`);
    };
};

const admin1 = new admin("Krishna","Super")
admin1.login();

//Example 2

class boilWater{
    constructor(water){
        this.water = water;
    }
    boil(){
        console.log(`${this.water} is boiling`);
    };
};

class Tea extends boilWater{
    constructor(water,ing){
        super(water);
        this.ing = ing;
    };
    makeTea(){
        super.boil();
        console.log(`Put the ${this.ing} in`);
    };
};

const Tea1 = new Tea("Water","Tea Bag");
Tea1.makeTea();