class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
    // creating a instance method to use
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName} and you are in year ${this.year}`;
    }

}

let Sean = new Student("Sean", "Jaculina", 4);

console.log(Sean.fullName());

