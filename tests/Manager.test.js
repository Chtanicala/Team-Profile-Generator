const Manager = require("../lib/Manager.js")

describe('Name', () => {
    it('Should return a specified name', () => {
        const manager1 = new Manager('Jake')

        expect(manager1.getName()).toBe('Jake');
    })
});

describe('Id', () => {
    it('Should return a specified id', () => {
        const manager1 = new Manager("Jake", 4)

        expect(manager1.getId()).toBe(4);
    })
});

describe('Email', () => {
    it('Should return a specified email', () => {
        const manager1 = new Manager("Jake", 4, "christian.tanicala@gmail.com")

        expect(manager1.getEmail()).toBe("christian.tanicala@gmail.com");
    })
});

describe('School', () => {
    it('Should return a specified Officenumber', () => {
        const manager1 = new Manager("Jake", 4, "christian.tanicala@gmail.com", 7)

        expect(manager1.getOfficenumber()).toBe(7);
    })
});


describe('Role', () => {
    it('Should return "Manager"', () => {
        const manager1 = new Manager()

        expect(manager1.getRole()).toBe("Manager");
    })
});