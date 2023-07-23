const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type:'input',
    name: 'description',
    message: 'Write a description of your project.',
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Write installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe the usage of your project',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Write the instructions how to contribute to your project'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write test instructions'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Choose a license for your project',
    choice: ['Apache', 'GNU', 'MIT', 'BSD-2'],
  },
  {
    type: 'input',
    name: 'gitname',
    message: 'Enter your github username',
  },
  {
    type: 'input',
    name: 'gitname',
    message: 'Enter your github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();