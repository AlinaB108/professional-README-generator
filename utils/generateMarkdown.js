// A function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if(license.length === 0){
    return ''
  } else if (license == 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'GNU'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == 'BSD-2'){
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
}

// A function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if(license.length === 0){
    return ''
  } else if (license == 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if(license == 'GNU'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license == 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  } else if (license == 'BSD-2'){
    return 'https://opensource.org/licenses/BSD-2-Clause'
  } 
}

// A function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)} 
    `
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, send me a message [GitHub](https://github.com/${data.gitname}) or send me an email: ${data.email}
`;
}

module.exports = generateMarkdown;
