// ===================================== Require ========================================= //
const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./intern");
const Engineer = require("./engineer");
const Intern = require("./manager");
// ===================================== Array ========================================= //
const htmlArray = [];
// ===================================== HTML ========================================= //
const htmlFile = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--No reset css-->
    <!--font awesome-->
    <script src="https://kit.fontawesome.com/416f7d7820.js" crossorigin="anonymous"></script>
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--Style css-->
    <link rel="stylesheet" href="./test.css">
    <title>Team profile generator</title>
</head>

<body>
    <div class="jumbotron header">
        <h1 class="display-4">Team Profile</h1>
        <hr class="my-4">
    </div>


    <div class="card-div" id="card-div-card">

    </div>
    <!---->

</body>

<!---->
<!---->
<!---->

</html>`

const engineerCard = `
                        <!--Card for Engineer-->
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <div class="name-background">
                                    <h3 class="card-title">${engineerName}</h3>
                                    <h5 class="card-title-two"><i class="fa-solid fa-glasses"></i>Engineer</h5>
                                </div>
                                <div class="center-body">
                                    <div class="box-info box-style">
                                        <p>ID: <span id="ID">${engineerId}</span></p>
                                    </div>
                                    <div class="box-info box-style">
                                        <p>Email: <span id="email">${engineerEmail}</span></p>
                                    </div>
                                    <div class="box-info box-style">
                                        <p>GitHub: <span id="github">${engineerSchool}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>`;

const internCard = `
                        <!--Card for Intern-->
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <div class="name-background">
                                    <h3 class="card-title">${internName}</h3>
                                    <h5 class="card-title-two"><i class="fa-solid fa-user-graduate"></i>Intern</h5>
                                </div>
                                <div class="center-body">
                                    <div class="box-info box-style">
                                        <p>ID: <span id="ID">${internId}</span></p>
                                    </div>
                                    <div class="box-info box-style">
                                        <p>Email: <span id="email">${internEmail}</span></p>
                                    </div>
                                    <div class="box-info box-style">
                                        <p>School: <span id="school">${internSchool}</span></p>
                                    </div>
                                </div>
                            </div>
                                    </div>`;

const managerCard = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="name-background">
                        <h3 class="card-title">${managerName}</h3>
                        <h5 class="card-title-two"><i class="fa-solid fa-mug-hot"></i>Manager</h5>
                    </div>
                    <div class="center-body">
                        <div class="box-info box-style">
                            <p>ID: <span id="ID">${managerId}</span></p>
                        </div>
                        <div class="box-info box-style">
                            <p>Email: <span id="email">${managerEmail}</span></p>
                        </div>
                        <div class="box-info box-style">
                            <p>Office Number: <span id="officeNumber">${managerOffice}</span></p>
                        </div>
                    </div>
                </div>
            </div>`;
// =====================================  Questions ========================================= //                               
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the managers name:',
        validate: managerName => {
            if (managerName == '') {
            console.log("Please enter a valid name");
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the managers ID:',
        validate: managerId => {
            if (managerId < 0) {
                console.log("Please enter a valid ID");
              return false;
            } else {
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the managers email:',
        validate: managerEmail => {
            if (managerEmail == '') {
                console.log("Please enter a valid email");
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Please enter the managers office number:',
        validate: managerOffice => {
            if (managerOffice < 0) {
                console.log("Please enter a valid office number");
              return false;
            } else {
              return true;
            }
        }
    }
];

const internQuesitons = [
    {
        type: 'input',
        name: 'internName',
        message: 'Please enter the interns name:',
        validate: internName => {
            if (internName == '') {
              console.log("Please enter a valid name");  
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Please enter the interns ID:',
        validate: internID => {
            if (internID < 0) {
            console.log("Please enter a valid ID");
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter the interns email:',
        validate: internEmail => {
            if (internEmail == '') {
                console.log("Please enter a valid email");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the interns school:',
        validate: internSchool => {
            if (internSchool == '') {
                console.log("Please enter a valid school");
                return false;
            } else {
              
                return true;
            }
        }
    }
];

const engineerQuesitons = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the engineers name:',
        validate: engineerName => {
            if (engineerName == '') {
              console.log("Please enter a valid name");  
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please enter the engineers ID:',
        validate: engineerID => {
            if (engineerID == '') {
              console.log("Please enter a valid ID");  
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter the engineers email:',
        validate: engineerEmail => {
            if (engineerEmail == '') {
              console.log("Please enter a valid email");  
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'Please enter the engineers GitHub:',
        validate: engineerGitHub => {
            if (engineerGitHub == '') {
              console.log("Please enter a valid GitHub username");  
              return false;
            } else {
              return true;
            }
        }
    }
];

const engineerIntern = [
    {
        type: 'choices',
        name: 'chooseMember',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern', 'Finished'],
    }
];

// =====================================  Functions ========================================= //
// 1 fucntion for manager (build manager)
function buildManager() {
    inquirer
        .prompt(managerQuestions)
        .then(data => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
            htmlArray.push(manager);
            addEmployee();
        })

}
// 2 function should have: do you want to build an intern or engineer or quit 
function addEmployee() {
    inquirer
        .prompt(engineerIntern)
        .then(data => {
            if(data === 'Engineer') {
                inquirer
                    .prompt(engineerQuesitons)
                    .then(data => {
                        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
                        htmlArray.push(engineer);
                        addEmployee();
                    })
            } else if(data === 'Intern') {
                inquirer
                    .prompt(internQuesitons)
                    .then(data => {
                        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                        htmlArray.push(intern);
                        addEmployee();
                    })
            } else {
                writeFile();
            }
        

        })
}
// 3 function (writeHtml)
function writeFile() {
    fs.writeFile('./dist/test.html', markDown(htmlArray),
    console.log('Team has been built!'), err => {
        if (err) {
            console.log(err);
        }
    })
}

// 4 funcution for markDown
function markDown(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--No reset css-->
        <!--font awesome-->
        <script src="https://kit.fontawesome.com/416f7d7820.js" crossorigin="anonymous"></script>
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!--Style css-->
        <link rel="stylesheet" href="./test.css">
        <title>Team profile generator</title>
    </head>
    
    <body>
        <div class="jumbotron header">
            <h1 class="display-4">Team Profile</h1>
            <hr class="my-4">
        </div>
    
    
        <div class="card-div" id="card-div-card">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="name-background">
                        <h3 class="card-title">${managerName}</h3>
                        <h5 class="card-title-two"><i class="fa-solid fa-mug-hot"></i>Manager</h5>
                    </div>
                    <div class="center-body">
                        <div class="box-info box-style">
                            <p>ID: <span id="ID">${managerId}</span></p>
                        </div>
                        <div class="box-info box-style">
                            <p>Email: <span id="email">${managerEmail}</span></p>
                        </div>
                        <div class="box-info box-style">
                            <p>Office Number: <span id="officeNumber">${managerOffice}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <!---->
    
    </body>
    
    <!---->
    <!---->
    <!---->
    
    </html>`
}

// start function on startup
function init(){
    buildManager
}

init();