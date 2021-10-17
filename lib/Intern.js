// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school){

        super(name, id, email, school);
        this.school = school;
        this.role = 'Intern';

    }

    getSchool(){
        return this.school;
    }

    setSchool(school){
        this.school = school;
    }

}

module.exports = Intern;