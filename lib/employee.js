class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id;
        this.email = email;
        this.role = "Employee";
      
    }

    printInfo() {
        console.log(`${this.name, id, email, role}`);
       
    }
}
module.exports = Employee;