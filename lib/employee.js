const inquirer = require("inquirer");
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id - id;
        this.email = email;
    }

    getName(){
        inquirer
            .prompt({
                type: 'input',
                name: 'getName',
                message: 'Please enter employees name:',
                // To validate user response
                validate: function (email) {
                    val = '@'.test(email);
                    if(val){
                        return true;
                    } else {
                        console.log('Please enter a valid email');
                        return false;
                    }
                }
            }) 
    }

    getId(){
        inquirer
            .prompt({
                type: 'input',
                name: 'getId',
                message: 'Please enter employees id:',
                // To validate user response
                validate: function (id) {
                    if(id <= 0){
                        console.log('Please enter a number higher than 0');
                        return false;
                    } else {
                        return true;
                    }
                }
            })
        
    }
}

module.exports = Employee;
