
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getname() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    // This is wrong relook
    getRole() {
        return "Employee"
    }

}

// let employee1 = new Employee("Christian", 4, "christian.tanicala@gmail.com");

// console.log (employee1)
// employee1.getRole()

module.exports = Employee;