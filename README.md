# Professional README Generator
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)



## Description 
A quickly and easily to use command-line application to generate high-quality README. This allows the project creator to devote more time to working on the project.

## Table of Contents 



- [Installation](#installation)
- [Usage](#usage)
- [License](#license)





 
## Installation
After cloning the repository user should run  the command:


npm install

It will install all the required dependencies including "inquirer"

## Usage

The application will be invoked by using the following command:


node index.js

The command-line application will accepts user input.
The  user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
* The title of my project 
* Sections entitled:
* Description 
* Table of Contents 
* Installation 
* Usage 
* License 
* Contributing 
* Tests 
* Questions

[See an example here](assets/generatedREADME.md)

When a user enters the project title then it is displayed as the title of the README
* When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the Tests
* When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
* When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
 * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
* When a user clicks on the links in the **Table of Contents** then they are taken to sections of the README entitled Description, Installation, Usage, Contributing, and the corresponding section of the README

You can watch this demo


![Demo](assets/Demo.gif)

Or for better quality [download this walkthrough video](https://drive.google.com/file/d/11ST_L_QVak3SSjXI2bjELqfJpzj9-Ewe/view?usp=sharing)

## License
[The MIT License](https://opensource.org/licenses/MIT)
