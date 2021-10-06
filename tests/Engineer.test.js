
const Engineer = require("../lib/Engineer.js")

describe('Name', () => {
    it('Should return a specified name', () => {
        const engineer1 = new Engineer('Jake')

        expect(engineer1.getName()).toBe('Jake');
    })
});

describe('Id', () => {
    it('Should return a specified id', () => {
        const engineer1 = new Engineer("Jake", 4)

        expect(engineer1.getId()).toBe(4);
    })
});

describe('Email', () => {
    it('Should return a specified email', () => {
        const engineer1 = new Engineer("Jake", 4, "christian.tanicala@gmail.com")

        expect(engineer1.getEmail()).toBe("christian.tanicala@gmail.com");
    })
});

describe('Role', () => {
    it('Should return "Engineer"', () => {
        const engineer1 = new Engineer()

        expect(engineer1.getRole()).toBe("Engineer");
    })
});

describe('Github', () => {
    it('Should return a github', () => {
        const engineer1 = new Engineer("Jake", 4, "christian.tanicala@gmail.com", "Chtanicala")

        expect(engineer1.getGithub()).toBe("Chtanicala");
    })
});