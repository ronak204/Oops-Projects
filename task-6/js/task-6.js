
function Emp(name, email, salary) {
    this.name = name;
    this.email = email;
    this.salary = salary;
}

Emp.prototype.setDesignation = function(designation) {
    this.designation = designation;
};

Emp.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Salary: ${this.salary}`);
    console.log(`Designation: ${this.designation || 'Not set'}`);
};

// Example usage
const employee1 = new Emp('John Doe', 'john.doe@example.com', 50000);
employee1.setDesignation('Software Engineer');
employee1.displayInfo();

const employee2 = new Emp('Jane Smith', 'jane.smith@example.com', 60000);
employee2.displayInfo();
