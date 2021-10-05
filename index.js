const inquirer = require("inquirer");
const fs = require("fs")
const jest = require("jest")

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const managerQuestions = [
    {
        type: 'input',
        message: "Please input manager's name.",
        name: "name"
    },

    {
        type: 'input',
        message: "Please input manager's employee ID.",
        name: "id"
    },

    {
        type: 'input',
        message: "Please input manager's email.",
        name: "email"
    },
    {
        type: 'input',
        message: "Please input manager's office number.",
        name: "officeNumber"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please input engineer's name.",
        name: "name"
    },

    {
        type: 'input',
        message: "Please input engineer's employee ID.",
        name: "id"
    },

    {
        type: 'input',
        message: "Please input engineer's email.",
        name: "email"
    },
    {
        type: 'input',
        message: "Please input engineer's github username.",
        name: "github"
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "Please input intern's name.",
        name: "name"
    },

    {
        type: 'input',
        message: "Please input intern's employee ID.",
        name: "id"
    },

    {
        type: 'input',
        message: "Please input intern's email.",
        name: "email"
    },
    {
        type: 'input',
        message: "Please input engineer's school.",
        name: "school"
    }
]

let managerPrompt = () =>{
    inquirer
        .prompt(
            managerQuestions
        )
        .then((answers) => {
            console.log(answers);
        
            employeePrompt();
        })
}

let employeePrompt = () => {
    inquirer
        .prompt( {
            type: 'list',
            message: 'Choose an employee to add.',
            name: 'employee',
            choices: ["Engineer", "Intern", "Finalize Team"]
        })
        .then((answers) => {

            console.log(answers);
            
            if (answers.employee === 'Engineer') {
                addEngineer()
            } else if (answers.employee === 'Intern') {
                addIntern()
            } else {
                finalizeteam();
            }
        }) 
}

let addEngineer = () => {
    inquirer
        .prompt(
            engineerQuestions
        )
        .then((answers) => {
            console.log(answers);
        
            employeePrompt();
        })
}


let addIntern = () => {
    inquirer
        .prompt(
            internQuestions
        )
        .then((answers) => {
            console.log(answers);
        
            employeePrompt();
        })
}


managerPrompt()