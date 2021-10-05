const inquirer = require("inquirer");
const fs = require("fs")
const jest = require("jest")

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const team = [];

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
            team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
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
            team.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
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
            team.push(new Intern(answers.name, answers.id, answers.email, answers.school))
            employeePrompt();
        })
}

let finalizeteam = () => {

    let cards = ``;

    for (let index = 0; index < team.length; index++) {
        
        if (team[index].officeNumber){
            cards +=

            `
            <div class = "card">
                <div class = "cardHeaders">
                    <h2 class = "name">${team[index].getName()}</h2>
                    <h3 class = "role">${team[index].getRole()}</h3>
                </div>
                <div class = "content">
                    <ul>
                        <li class = "id">ID: ${team[index].getId()} </li>
                        <li class = "email">Email:<a href="mailto:${team[index].getEmail()}">${team[index].getEmail()}</a></li>
                        <li class = "managerOfficenumber">Office Number: ${team[index].officeNumber} </li>
                    </ul>
                </div>
            </div>
        `
        } else if (team[index].github) {
            cards +=
            `
            <div class = "card">
                <div class = "cardHeaders">
                    <h2 class = "name">${team[index].getName()}</h2>
                    <h3 class = "role">${team[index].getRole()}</h3>
                </div>
                <div class = "content">
                    <ul>
                        <li class = "id">ID: ${team[index].getId()} </li>
                        <li class = "email">Email:<a href="mailto:${team[index].getEmail()}">${team[index].getEmail()}</a></li>
                        <li class = "engineerGithub">Github: <a href="https://www.github.com/XXX" target="_blank">${team[index].getGithub()}</a></li>
                    </ul>
                </div>
            </div>
            `    
        } else {
            cards +=
            `
            <div class = "card">
                <div class = "cardHeaders">
                    <h2 class = "name">${team[index].getName()}</h2>
                    <h3 class = "role">${team[index].getRole()}</h3>
                </div>
                <div class = "content">
                    <ul>
                        <li class = "id">ID: ${team[index].getId()} </li>
                        <li class = "email">Email:<a href="mailto:${team[index].getEmail()}">${team[index].getEmail()}</a></li>
                        <li class = "internSchool">School: ${team[index].getSchool()} </li>
                    </ul>
                </div>
            </div>
            `
        }
        
    }

    let output = 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <title>Development Team</title>
</head>

<body>

<header>
    <h1>Development Team</h1>
</header>

<div id = "container">
    ${cards}
</div>

</body>

</html>
    `

    fs.writeFile("./dist/index.html", output, () => {})
}

managerPrompt()