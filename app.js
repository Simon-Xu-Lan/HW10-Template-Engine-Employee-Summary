const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

const createTeam = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: "Please input employee's name"
            },
            { 
                type: 'input',
                name: 'id',
                message: "Please input the employee's ID"
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please input the email of the employee'
            },
            {
                type: 'input',
                name: 'userChoice',
                message: 'What type of employee',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern',
                    'No more employees'
                ]
            }
        ]
    ).then(data => {
        switch(data.userChoice) {
            case "Manager":
                createManager(data);
                break;
            case "Engineer":
                createEngineer(data);
                break;
            case "Intern":
                createManager(data);
                break;
            // render the page when user choose "No more employees"
            default:
                render(employees);
        }
    })
} // end of createTeam function


const createManager = (data) => {
    inquirer.prompt([
        {
            type: "input",
            name: "officePhone",
            message: "Please input the office phone number"
        }
    ]).then(managerData => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            managerData.officePhone
        );

        employees.push(manager);
        createTeam();
    })
}


const createEngineer = (data) => {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Please input the github account"
        }
    ]).then(engineerData => {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            engineerData.github
        );

        employees.push(engineer);
        createTeam();
    })
}

const createIntern = (data) => {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Please input the school"
        }
    ]).then(internData => {
        const intern = new Intern(
            data.name,
            data.id,
            data.email,
            internData.school
        );

        employees.push(intern);
        createTeam();
    })
}

// start the program
createTeam();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
