const Employee = require('./employee')
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school; 
        this.status = 'Intern';
    }
    getSchool(){
        return this.school;
    }
    getStatus() {
        return this.status;
    }
}

module.exports = Intern;
