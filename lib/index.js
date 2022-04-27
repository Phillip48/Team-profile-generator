// ===================================== Require ========================================= //
const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs');
const Manager = require("./intern");
const Engineer = require("./engineer");
const Intern = require("./manager");

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
// const render = require('../dist')
// ===================================== Array ========================================= //
const htmlArray = [];
// ===================================== HTML ========================================= //

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
        // validate: managerId => {
        //     if (managerId < 0) {
        //         console.log("Please enter a valid ID");
        //       return false;
        //     } else {
        //       return false;
        //     }
        // }
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
        type: 'list',
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
            if (data.chooseMember == 'Engineer') {
                inquirer
                    .prompt(engineerQuesitons)
                    .then(data => {
                        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
                        htmlArray.push(engineer);
                        addEmployee();
                    })
            } else if (data.chooseMember == 'Intern') {
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
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync('./dist/test.html', renderFile(htmlArray), 'utf-8',
        console.log('Team has been built!'), err => {
            if (err) {
                console.log(err);
            }
        })
}

// 4 funcution for markDown
function renderFile(htmlArray) {
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
        <style>
            .header {
                display: flex;
                justify-content: center;
                padding: 1rem;
                background-color: slategrey;
            }

            .card-div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                margin: 1rem;
            }

            .card {
                margin: 1rem;
                border: 1px solid black;
                /* border-radius: 25px; */
                box-shadow: 5px 10px 8px #888888;
            }

            .card-body {
                padding: 0;
            }

            .card-title,
            .card-text {
                display: flex;
                /* justify-content: center; */
                padding: .25rem 1rem 0 1rem;
            }

            .card-title-two{
                display: flex;
                padding: 0 1rem 1rem 1rem;
            }


            .center-body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
                margin-bottom: 1rem;
            }

            .name-background {
                background-color: dodgerblue;
                /* border-radius: 25px 25px 0 0; */
            }

            .box-info {
                display: flex;
                justify-content: start;
                padding: .25rem;
            }
            .box-style {
                padding: .25rem;
                border: 1px solid black;
                width: 80%;
            }
        </style>
        <link rel="stylesheet" href="./test.css">
        <title>Team profile generator</title>
    </head>
    
    <body>
        <div class="jumbotron header">
            <h1 class="display-4">Team Profile</h1>
            <hr class="my-4">
        </div>
    
    
        <div class="card-div" id="card-div-card">
            ${generateTeam}
        </div>
        <!---->
    
    </body>
    
    <!---->
    <!---->
    <!---->
    
    </html>`

}

function generateTeam(team) {
    let emptyArray = [];

    function generateManager() {
        return `
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

    }
    function generateIntern() {
        return `
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
    }
    function generateEngineer() {
        return `
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
    }

    emptyArray.push(team
        .map(generateManager));
    emptyArray.push(team
        .map(generateIntern));
    emptyArray.push(team
        .map(generateEngineer));

}

// start function on startup
function init() {
    buildManager();
}

init();