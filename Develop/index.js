// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        title: "What is the title of your project?",
        name: "Title"
    },

    {
        description: "Please add a description of your project",
        name: "Description"
    },
    {
        tableOfContents: "Please create a table of contents",
        name: "Table of Contents"
    },
    {
        installationInstructions: "What are the installation instructions?",
        name: "Installation"
    },
    {
        usageInformation: "Please provide instructions on how to use",
        name: "Usage"
    },
    {
        contribution: "What are the contribution guidelines?",
        name: "Contribute"
    },
    {
        testInstructions: "What are the test instructions?", 
        name: "Tests"
    },
    {
        message: "What licence did you use?",
        name: "License",
        type: "list",
        choices: ["None", "MIT", "Apache2.0", "GNU-General-Public-Licencev3.0"],
    },
    {
        gitHub: "Please add your GitHub username",
        name:"GitHub"
    },
    {
        email: "Please add your email",
        name: "Email"
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return  fileName = `${data.toLowerCase().split('').join('')}.md`;//creates file
        
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response)=> {

            console.log("got it!")
            fs.writeFile("./README.md", generateMarkdown({...response}), (err)=>//grabs data from the top
            err ? console.log(err) : console.log("generating README!"))
        })
        .catch((error)=>{
            console.log(error)
        })
}

// Function call to initialize app
init();