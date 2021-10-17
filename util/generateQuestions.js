function generateQuestions(title){

    switch(title){

        case "manager" :
        const managerQuestions = [
        {
            type:"input",
            message:"Please enter the manager's name:",
            name:"name"
        },
        {
            type:"input",
            message:"Please enter the manager's employee ID number:",
            name:"id"
        },
        {
            type:"input",
            message:"Please enter the manager's email address:",
            name:"email"
        },
        {
            type:"input",
            message:"Please enter the manager's office number:",
            name:"officeNumber"
        }
        ]    
        return managerQuestions;
        
        case "engineer" :
        const engineerQuestions = [
        {
            type:"input",
            message:"Please enter the engineer's name:",
            name:"name"
        },
        {
            type:"input",
            message:"Please enter the engineer's employee ID number:",
            name:"id"
        },
        {
            type:"input",
            message:"Please enter the engineer's email address:",
            name:"email"
        },
        {
            type:"input",
            message:"Please enter the engineer's GitHub username:",
            name:"github"
        }
        ]
        return engineerQuestions;
        
        case "intern" :
        const internQuestions = [
        {
            type:"input",
            message:"Please enter the intern's name:",
            name:"name"
        },
        {
            type:"input",
            message:"Please enter the intern's employee ID number:",
            name:"id"
        },
        {
            type:"input",
            message:"Please enter the intern's email address:",
            name:"email"
        },
        {
            type:"input",
            message:"Please enter the name of the school where the intern is currently enrolled:",
            name:"school"
        }
        ]
        return internQuestions;
    }
}

//this function will generate the questions to be asked. It's inside this module to keep my code clean.

module.exports = generateQuestions;