// extend the parent/employee class
const Emplyee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officePhone) {
        // using super to get parent/employee property and methods
        super(name, id, email);

        // define its own property
        this.officePhone = phone;
    }
        // define its own method getSchool
        getOfficePhone() { return this.officePhone };

        // redefine getRole method for Intern class
        getRole() {return "manager"};

};

// exports allows this module can be used elsewhere
module.exports = Manager;
