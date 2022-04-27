const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.status = 'Manager';
    }
    getOffice(){
        return this.office;
    }
    getStatus() {
        return this.status;
    }
}

module.exports = Manager;