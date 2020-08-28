// extend the parent/employee class
const Employee = require("./employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
         // using super to get parent/employee property and methods
        super(name, id, email);
        // define its own property
        this.github = github;
    };

    // define its own method getGithub
    getGithub() { return this.github};

     // redefine getRole method for Intern class
    getRole() {return "engineer"};
};

// exports this module to be used somewhere else
module.exports = Engineer;
