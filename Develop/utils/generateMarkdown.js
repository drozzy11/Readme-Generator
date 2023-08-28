// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None"){
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None"){
    return "";
  }
  return `[License](#License)`;

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}
## Title
${data.Title}

## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [How-to-Contribute](#How-to-Contribute)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## How-to-Contribute
${data.Contribute}

## Tests
${data.Tests}

## License
${data.License}

## Questions
GitHub:${data.GitHub}
Email:${data.Email}

`;
}

module.exports = generateMarkdown;