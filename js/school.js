class School {
    constructor(schoolName) {
        this.schoolName = schoolName;
        this.students = [];
        this.faculties = [];
        this.peons = [];
    }

    addStudent(name, email, contact) {
        this.students.push({ name, email, contact });
    }

    addFaculty(name, email, contact) {
        this.faculties.push({ name, email, contact });
    }

    addPeon(name, email, contact) {
        this.peons.push({ name, email, contact });
    }

    printStudents() {
        console.log("Students:");
        this.students.forEach(student => {
            console.log(`Name: ${student.name}, Email: ${student.email}, Contact: ${student.contact}`);
        });
    }

    printFaculties() {
        console.log("Faculties:");
        this.faculties.forEach(faculty => {
            console.log(`Name: ${faculty.name}, Email: ${faculty.email}, Contact: ${faculty.contact}`);
        });
    }

    printPeons() {
        console.log("Peons:");
        this.peons.forEach(peon => {
            console.log(`Name: ${peon.name}, Email: ${peon.email}, Contact: ${peon.contact}`);
        });
    }
}

const mySchool = new School("Greenfield High School");

mySchool.addStudent("gautam", "gautam@123.com", "123-456-7890");
mySchool.addStudent("yachna", "yachna@123.com", "987-654-3210");

mySchool.addFaculty("Dr. druvin", "druvin@123.com", "555-123-4567");
mySchool.addFaculty("Mr. darshan", "darshan@123.com", "555-987-6543");

mySchool.addPeon("", "rohan@123.com", "444-123-4567");
mySchool.addPeon("janvi", "janvi@123.com", "444-987-6543");

mySchool.printStudents();
mySchool.printFaculties();
mySchool.printPeons();