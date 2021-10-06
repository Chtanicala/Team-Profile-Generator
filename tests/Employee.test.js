const Employee = require("../lib/Employee.js")

describe('Name', () => {
    it('Should return a specified name', () => {
        const employee1 = new Employee('Jake')

        expect(employee1.getName()).toBe('Jake');
    })
});