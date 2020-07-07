// Function to generate the required readme section headings.
function generateMarkdown(data) {
	return `
# Project Title
[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
${data.licenseBadge}

${data.title}

# Description
${data.description}

# Table of contents
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-License)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)

# Installation
To install necessary NPM module dependencies, run the following command:

${data.installation}



# Usage
${data.usage}

# License
License used for this project - ${data.license}

* For more information on license types, please reference this website for additional licensing information - [https://choosealicense.com/](https://choosealicense.com/).

# Contributing
${data.contributing}

# Tests
${data.tests}

# Contact Information
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
* Profile Picture: 

![Uploaded profile pic provided by user.](https://github.com/${data.userName}.png)
`;
}
// Exporting the generateMarkdown function inorder to invoke in the index.js file.
module.exports = generateMarkdown;
