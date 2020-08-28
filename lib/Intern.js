// extend the parent/employee class
const Emplyee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // using super to get parent/employee property and methods
        super(name, id, email);

        // define its own property
        this.school = school;
    }
        // define its own method getSchool
        getSchool() { return this.school };

        // redefine getRole method for Intern class
        getRole() {return "intern"};

};

// exports allows this module can be used elsewhere
module.exports = Intern;
