//Account Example

class Account{
    #balance = 0; //private modifier
    deposit(amt){
        if(amt > 0){
            this.#balance += amt;
            console.log(`$${amt} deposited, current balance: ${this.#balance}`);
        }else{
            console.log("Amount should be higher than 0");
        };
    };
    withdraw(amt){
        if(amt > 0 && amt <= this.#balance){
            this.#balance -= amt;
            console.log(`$${amt} withdrawn, current balance: ${this.#balance}`);
        }else{
            console.log("Insufficient Balance");
        };
    };
    showBalance(){
        console.log(`Current Balance = $${this.#balance}`);
    };
};

const Krishna = new Account();
Krishna.deposit(10000);
Krishna.withdraw(2000);
Krishna.showBalance();

//Student Cgpa Example
class student{
    #cgpa = 0;
    constructor(name){
        this.name = name
    }
    maths(marks){
        if(marks > 50){
            this.#cgpa += 2;
        }else{
            this.#cgpa += 1;
        }
    }
    english(marks){
       if(marks > 50){
           this.#cgpa += 2;
        }else{
            this.#cgpa += 1;
        }
    }
    hindi(marks){
        if(marks > 50){
            this.#cgpa += 2;
        }else{
            this.#cgpa += 1;
        }
    }
    science(marks){
        if(marks > 50){
            this.#cgpa += 2;
        }else{
            this.#cgpa += 1;
        }
    }
    socialScience(marks){
        if(marks > 50){
            this.#cgpa += 2;
        }else{
            this.#cgpa += 1;
        }
    }
    totalMarks(){
        console.log(`${this.name} scored ${this.#cgpa} cgpa.`);
    }
}

const student1 = new student("Krishna");
student1.maths(80);
student1.english(80);
student1.hindi(40);
student1.science(90);
student1.socialScience(45);
student1.totalMarks();