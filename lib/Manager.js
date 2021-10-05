const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    getRole() {
        console.log("Manager") 
    }
}

// let manager1 = new Manager("Christian", 4, "christian.tanicala@gmail.com", 20)
// console.log (manager1)
// manager1.getRole()

module.exports = Manager;