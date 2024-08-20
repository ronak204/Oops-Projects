
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        document.getElementById("name").innerHTML=(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Father extends Person {
    constructor(name) {
        super(name, 60);
    }
}

class Child extends Person {
    constructor(name) {
        super(name, 20);
    }
}

const father = new Father("John Doe");
father.displayInfo();

const child = new Child("Jane Doe");
child.displayInfo();
