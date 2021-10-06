const Employee = require("../lib/Employee.js")

describe('Name', () => {
    it('Should return a specified name', () => {
        const employee1 = new Employee('Jake')

        expect(employee1.getName()).toBe('Jake');
    })
});

describe('Id', () => {
    it('Should return a specified id', () => {
        const employee1 = new Employee("Jake", 4)

        expect(employee1.getId()).toBe(4);
    })
});

describe('Email', () => {
    it('Should return a specified email', () => {
        const employee1 = new Employee("Jake", 4, "christian.tanicala@gmail.com")

        expect(employee1.getEmail()).toBe("christian.tanicala@gmail.com");
    })
});

describe('Role', () => {
    it('Should return "Employee"', () => {
        const employee1 = new Employee()

        expect(employee1.getRole()).toBe("Employee");
    })
});