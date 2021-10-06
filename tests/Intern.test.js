const Intern = require("../lib/Intern.js")

describe('Name', () => {
    it('Should return a specified name', () => {
        const intern1 = new Intern('Jake')

        expect(intern1.getName()).toBe('Jake');
    })
});

describe('Id', () => {
    it('Should return a specified id', () => {
        const intern1 = new Intern("Jake", 4)

        expect(intern1.getId()).toBe(4);
    })
});

describe('Email', () => {
    it('Should return a specified email', () => {
        const intern1 = new Intern("Jake", 4, "christian.tanicala@gmail.com")

        expect(intern1.getEmail()).toBe("christian.tanicala@gmail.com");
    })
});

describe('School', () => {
    it('Should return a specified school', () => {
        const intern1 = new Intern("Jake", 4, "christian.tanicala@gmail.com", "Rossford")

        expect(intern1.getSchool()).toBe("Rossford");
    })
});


describe('Role', () => {
    it('Should return "Intern"', () => {
        const intern1 = new Intern()

        expect(intern1.getRole()).toBe("Intern");
    })
});