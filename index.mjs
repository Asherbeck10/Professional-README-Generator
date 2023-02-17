
import inquirer from 'inquirer';
import fs from "fs/promises";
const licenses=['Apache 2.0', 'The MIT License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0']

//user input
const { title,description,installation,usage,license,contributing,tests,gitHubUserName,gitHubProfile,email} = await inquirer
    .prompt([
        {
            name: 'title',
            message: "What is the title of your project?",
            type: 'input',
        },
        {
            name: 'description',
            message: "Write a description of your project:",
            type: 'input',
            
            
        },
        {
            name: 'installation',
            message: "Provide a step-by-step description of how to get the development environment running:",
            type: 'input',
            
            
        },
        {
            name: 'usage',
            message: "Provide instructions and examples for use:",
            type: 'input',
            
            
        },
        {
            name: 'contributing',
            message: "Provide  guidelines for how to contribute:",
            type: 'input',
            
            
        },
        {
            name: 'tests',
            message: "Write tests for your application. Then provide examples on how to run them here:",
            type: 'input',
        
            
            
        },
        {
            name: 'gitHubUserName',
            message: "What is your github username?",
            type: 'input',
            
            
        },
        {
            name: 'gitHubProfile',
            message: "Provide  a link to your github profile:",
            type: 'input',
            
            
        },
        {
            name: 'email',
            message: "What is your email address?",
            type: 'input',
            
            
        },
        

        {
            type: 'list',
            name: 'license',
            message: 'Chose a license from the following list:',
            choices: licenses,
            filter(val) {
              return val.toLowerCase();
         },
        },
    ])
    

//README template

let readmeText=`


# ${title}
${createBanner(license)}

## Description
${description}



## Table of Contents 



- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${installation}

## Usage

${usage}

## License

 Licensed under  ${license.toUpperCase()}.



## Contributing

${contributing}

## Tests

${tests}


## Questions
* My github username is: ${gitHubUserName}
* You can find my github profile here: ${gitHubProfile}
* For any question please email me to: ${email}

`



//license banner

 function createBanner(license) {
    switch (license) {
        case licenses[0].toLowerCase():
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        case licenses[1].toLowerCase():
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case licenses[2].toLowerCase():
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
        case licenses[3].toLowerCase():
        return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
          
    
        default:
            break;
    }
    
}
        


    
//creating and writing to a README file.

await fs.writeFile("README.md", readmeText)
console.log('well done! 🏆')
