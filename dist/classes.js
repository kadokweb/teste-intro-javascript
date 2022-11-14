"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        ;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let user = new User('Doka', 'Silva', 66);
console.log(user);
console.log(user.getFullName());
