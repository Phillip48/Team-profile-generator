const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.status = 'Manager';
    }
    getOffice(){
        return this.officeNumber;
    }
    getStatus() {
        return this.status;
    }
}

module.exports = Manager;