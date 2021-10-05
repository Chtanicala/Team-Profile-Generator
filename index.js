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


inquirer
  .prompt([
    {
        type: "input",
        message: "Enter a title for this project.",
        name: "Project Title",
    },
  ])
  .then((answers) => {
    console.log(answers);
    let output = 
    fs.writeFile("./SampleREADME.md", output, ()=>{});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });