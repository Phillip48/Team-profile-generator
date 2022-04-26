const Employee = require('./employee')
class Intern {
    constructor(name, id, email) {
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
