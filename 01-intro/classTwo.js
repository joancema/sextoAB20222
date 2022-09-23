class Person{

    constructor(firstName, lastName)
    {
        this.firstName= firstName;
        this.lastName= lastName;
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}


const personExample  = new Person("JOhn", "Cevallos");
let fullName=  personExample.getFullName();
console.log(fullName)