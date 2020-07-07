// This function will return specific badges based on license selection.
function licenseBadge(value) {
	if (value === "GNU AGPLv3") {
		return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
	} else if (value === "GNU GPLv3") {
		return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
	} else if (value === "GNU LGPLv3") {
		return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
	} else if (value === "Mozilla") {
		return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
	} else if (value === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	} else if (value === "Apache") {
		return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
	} else {
		return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
	}
}

/*Function used to validate entry for all questions (except email question).
Email question has separate validation.*/
function validation(value) {
	if (value != "") {
		return true;
	} else {
		return "Please answer the question.";
	}
}

// Const question variable that will house all the questions.
const questions = [
	// Question for project title section
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Question for Project Description section
	{
		type: "input",
		name: "description",
		message: "Please enter a brief description of your project.",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Question for Installation section
	{
		type: "input",
		name: "installation",
		message:
			"What commands did you use to install NPM modules for the program?",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Question for Usage Section
	{
		type: "input",
		name: "usage",
		message: "Please describe how we can use this program.",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Question for License section
	{
		type: "list",
		name: "license",
		message: "Please select the license you used for this project.",
		choices: [
			"GNU AGPLv3",
			"GNU GPLv3",
			"GNU LGPLv3",
			"Mozilla",
			"MIT",
			"Apache",
			"Boost",
		],
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Question for Contributing section
	{
		type: "input",
		name: "contributing",
		message: "How can someone contribute to your project?",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Question for Tests section
	{
		type: "input",
		name: "tests",
		message:
			"Please enter any testing protocols that you used for your project?",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// Username question for Contact section
	{
		type: "input",
		name: "userName",
		message: "What is your GitHub username?",
		// validate inquirer method to make sure question is answered.
		validate: validation,
	},
	// User email question for Contact section
	{
		type: "input",
		name: "userEmail",
		message: "What is your GitHub email?",
		// validate inquirer method to make sure question is answered.
		validate: function (value) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				return true;
			} else {
				return "Not a valid email. Please enter valid email.";
			}
		},
	},
];
// Const fs variable that will allow us to use fs modules
const fs = require("fs");
// Const inquirer variable that will allow us to use the NPM inquirer module
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// This function is used to generate the ReadMe titles and content.
function writeToFile(fileName, data) {
	let readMeString = generateMarkdown(data);
	fs.writeFile(fileName, readMeString, function (err) {
		if (err) {
			return console.log(err);
		}
	});
}

/*This function is used to trigger question prompts, store answer data, 
and calls writeToFile() function.*/
function init() {
	// inquirer.prompt method will ask the questions and store answers in JSON object
	inquirer.prompt(questions).then((data) => {
		console.log(JSON.stringify(data, null, " "));
		data.licenseBadge = licenseBadge(data.license);
		writeToFile("./sample/readme.md", data);
	});
}

/* Invoking the init() function to begin question promptingm content storing, 
and sample readme generation.*/
init();
