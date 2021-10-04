
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getname() {
        console.log(`${this.name}`)
    }
    getId() {

    }
    getEmail() {

    }
    // This is wrong relook
    getRole() {
        console.log("Employee") 
    }

}

let employee1 = new Employee("Christian", 4, "christian.tanicala@gmail.com");

console.log (employee1)
employee1.getRole()

module.exports = Employee;