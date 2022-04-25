const inquirer = require("inquirer");

const managerCard = `
        <!--Card for Manager-->
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
        type: 'choice',
        name: 'continue',
        message: 'Would you like to add another team member?'
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
        type: 'choice',
        name: 'continue',
        message: 'Would you like to add another team member?'
    }
];