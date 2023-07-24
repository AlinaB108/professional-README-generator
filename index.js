const fs = require('fs');
const inquirer = require('inquirer');

// An array of questions for user input
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
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['Apache', 'GNU', 'MIT', 'BSD-2'],
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

// Creates a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), error => 
    error ? console.log(error) : console.log('README was created successfully!')
  );
};

// A function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answers){
    const fileName ='README-test.md'

    writeToFile(fileName, answers);
  });
};

// Function call to initialize app
init();
