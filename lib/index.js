const inquirer = require("inquirer");
const fs = require('fs');
// const html = require('../dist/test.html')
// document broken
// const cardDiv = document.getElementById('card-div-card');
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

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the managers name:'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the managers ID:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the managers email:'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Please enter the managers office number:'
    },
    {
        type: 'choices',
        name: 'chooseMember',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
    }
];

const internQuesitons = [
    {
        type: 'input',
        name: 'internName',
        message: 'Please enter the interns name:'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Please enter the interns ID:'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter the interns email:'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the interns school:'
    },
    {
        type: 'choices',
        name: 'continue',
        message: 'Would you like to add another team member?',
        choices: ["Yes", 'No']
    }
];

const engineerQuesitons = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the engineers name:'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Please enter the engineers ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter the engineers email:'
    },
    {
        type: 'input',
        name: 'engineerSchool',
        message: 'Please enter the engineers school:'
    },
    {
        type: 'choices',
        name: 'continue',
        message: 'Would you like to add another team member?',
        choices: ["Yes", 'No']
    }
];

const engineerIntern = [
    {
        type: 'choices',
        name: 'chooseMember',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
    }
];

const addTeamMemeber = [
    {
        type: 'choices',
        name: 'continue',
        message: 'Would you like to add another team member?',
        choices: ["Yes", 'No']
    }
];

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

function writeFile() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            // const managerCard = `
            // <div class="card" style="width: 18rem;">
            //     <div class="card-body">
            //         <div class="name-background">
            //             <h3 class="card-title">${managerName}</h3>
            //             <h5 class="card-title-two"><i class="fa-solid fa-mug-hot"></i>Manager</h5>
            //         </div>
            //         <div class="center-body">
            //             <div class="box-info box-style">
            //                 <p>ID: <span id="ID">${managerId}</span></p>
            //             </div>
            //             <div class="box-info box-style">
            //                 <p>Email: <span id="email">${managerEmail}</span></p>
            //             </div>
            //             <div class="box-info box-style">
            //                 <p>Office Number: <span id="officeNumber">${managerOffice}</span></p>
            //             </div>
            //         </div>
            //     </div>
            // </div>`;

            fs.writeFile('user.html', markDown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        })
        // loop over questions until done making team memebers, make new array for new results if needed
        .then(data); {
        inquirer
        if ('chooseMember' === 'Engineer') {
            inquirer
                .prompt(engineerQuesitons)
                .then((data) => {
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
                                        <p>ID: <span id="ID">${engineerID}</span></p>
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
                    fs.append(cardDiv, engineerCard(data), (err) =>
                        err ? console.log(err) : console.log('Success!'));
                })
        } else {
            inquirer
                .prompt(internQuesitons)
                .then((data) => {
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
                                        <p>ID: <span id="ID">${internID}</span></p>
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
                    fs.append('user.html', internCard(data), (err) =>
                        err ? console.log(err) : console.log('Success!'));
                })
            if ('continue' === 'Yes') {
                inquirer
                    .prompt(engineerIntern)
                if ('chooseMember' === 'Engineer') {
                    inquirer
                        .prompt(engineerQuesitons)
                        .then((data) => {
                            fs.append('user.html', engineerCard(data), (err) =>
                                err ? console.log(err) : console.log('Success!'));
                        })
                } else {
                    inquirer
                        .prompt(internQuesitons)
                        .then((data) => {
                            fs.append('user.html', internCard(data), (err) =>
                                err ? console.log(err) : console.log('Success!'));
                        })
                }
            } else {
                return;
            }
        }
    }
}

function init(){
    writeFile();
}

init();