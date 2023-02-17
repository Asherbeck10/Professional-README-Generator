
import inquirer from 'inquirer';
import fs from "fs/promises";

//user input
const { title,description,installation,usage,license } = await inquirer
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
            type: 'list',
            name: 'license',
            message: 'Chose a license from the following list:',
            choices: ['Apache 2.0', 'The MIT License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0'],
            filter(val) {
              return val.toLowerCase();
         },
        },
    ])
    console.log(license)

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

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Contributing

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions
`
//license banner

 function createBanner(license) {
    switch (license) {
        case 'apache 2.0':
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
          
    
        default:
            break;
    }
    
}
        
    console.log(createBanner(license))
    
//creating and writing to a README file.

await fs.writeFile("README.md", readmeText)
console.log('well done!')