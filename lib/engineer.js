const Employee = require('./employee')
class Engineer extends Employee{
    constructor(name, id , email, gitHub) {
        super(name, id , email)
        this.gtiHub = gitHub;
        this.status = 'Engineer';
    }
    getGithub() {
        return this.github;
    }
    getStatus() {
        return this.status;
    }
}

module.exports = Engineer;
