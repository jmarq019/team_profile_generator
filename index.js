const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateQuestions = require("./util/generateQuestions")
const generateTeam = require("./util/generateHtml");
const fs = require("fs");

let engineerArary = [];
let internArray = [];
let managerArray = [];
let questionsArray = [];
let data;

//this function will ask the user what they want to do and will function recursively until the user chooses to end the loop.
async function init(){

    const ans = await inquirer.prompt([{type:"list", message:"What would you like to do?", choices:["Add new manager", "Add new engineer", "Add new intern", "Nothing"], name:"answer"}]);

    switch(ans.answer){
        case "Add new manager" :
            questionsArray = generateQuestions("manager");
            data = await inquirer.prompt(questionsArray);
            let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            managerArray.push(newManager);
            init();
            break;

        case "Add new engineer" :
            questionsArray = generateQuestions("engineer");
            data = await inquirer.prompt(questionsArray);
            let newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            engineerArary.push(newEngineer);
            init();
            break;

        case "Add new intern" :
            questionsArray = generateQuestions("intern");
            data = await inquirer.prompt(questionsArray);
            let newIntern = new Intern(data.name, data.id, data.email, data.school);
            internArray.push(newIntern);
            init();
            break;

        default :
            
            let newTeam = generateTeam([...managerArray,...internArray,...engineerArary]);
            fs.writeFile(`index.html`, newTeam, (err) =>
            err ? console.error(err) : console.log('Team page created successfully!')
            );
            console.log("Goodbye!");
            break;
    }

}

init();