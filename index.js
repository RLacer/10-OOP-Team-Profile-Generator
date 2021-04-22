const { prompt } = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/template');
const teamMembers = [];
const idArray = [];

function appMenu() {
    createManager();
    function createManager() {
        console.log("Please build  your team")
        prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the managers name",

            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the managers ID number",

            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the managers email address",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the managers office number",
            },


        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);

            createTeam()

        });
    }

        function addEngineer() {
            prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Enter the engineers name",
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Enter the engineers ID",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Enter the engineers email",
                },

                {
                    type: "input",
                    name: "github",
                    messaage: "Enter the engineers github user  name",
                },
            ])
                .then(answers => {
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                    teamMembers.push(engineer);
                    idArray.push(answers.engineerId);
                    createTeam();
                }
                )
        };

        function addIntern() {
            prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Enter the interns name",
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Enter the interns ID",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Enter the interns email",
                },

                {
                    type: "input",
                    name: "school",
                    message: "Enter the interns school name",
                },
            ])
                .then(answers => {
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                    teamMembers.push(intern);
                    idArray.push(answers.school);
                    createTeam();
                }
                )
        };
        function createTeam() {
            prompt([
                {
                    type: "list",
                    name: "memberChoice",
                    message: "Choose a team member type",
                    choices: ["Engineer", "Intern", "Done with team members"],
                },
            ]).then(userChoice => {
                switch (userChoice.memberChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            })
        }
        function buildTeam() {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(teamMembers), "UTF-8")
        }




    }




    appMenu();