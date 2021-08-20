class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    // creating a instance method to use
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName} and you are in year ${this.year}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return `${this.firstName} ${this.lastName} you have been expelled`;
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }

    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAvg(){
        let sum = this.scores.reduce(function(a, b){
            return a+b
        });
        return sum/this.scores.length;

    }

    /* static keyword defines a static method for a class.
    Static methods are called without instantiating their class & cannot be called through a class instance.
    Static methods are often used to create utility functions for an application.
    */
    static enrollStudents(...students){
        console.log(...students);
    }
}


let Sean = new Student("Sean", "Jaculina", 4);
let student2 = new Student("Student", "2", 4);


Sean.addScore(91);
Sean.addScore(82);
console.log(Sean.calculateAvg());

Student.enrollStudents(Sean, student2);
