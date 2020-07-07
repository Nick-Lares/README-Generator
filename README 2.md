# Homework 9 - Good ReadMe Generator

![GitHub top language](https://img.shields.io/github/languages/top/keduran/readme-generator?logo=GitHub)
![GitHub followers](https://img.shields.io/github/followers/keduran?color=yellow&logo=GitHub)

## Project Description

The goal for this homework assignment is to create a command-line application that dynamically generates a README.md file based on the user's input to a series of prompted questions populated in the command-line terminal. Additional details regarding this assignment are addressed in the following sections listed below.

## Table of Contents

Reference the links below to navigate to the major sections of this readme.

- [Links to Submission Items](#links-to-submission-items)
- [Assignment Scope](#assignment-scope)
- [Executing the Script](#executing-the-script)

## Links to Submission Items

Here are the links to the MVP items that had to be developed for this assignment. I will also be submitting these same items/links on Boot Camp Spot.

- Link to GitHub Repo - [https://github.com/KEDuran/ReadMe-Generator](https://github.com/KEDuran/ReadMe-Generator)
- Link to Sample Generated ReadMe.md file - [https://github.com/KEDuran/ReadMe-Generator/blob/master/sample/readme.md](https://github.com/KEDuran/ReadMe-Generator/blob/master/sample/readme.md)
- Link to Demo Video for Generate Readme App - [https://drive.google.com/file/d/1m-ComMeIbck5cEoKtMGK6WJj0mVhsWJC/view?usp=sharing](https://drive.google.com/file/d/1m-ComMeIbck5cEoKtMGK6WJj0mVhsWJC/view?usp=sharing)

## Assignment Scope

This assignment listed various requriement items that had to be met in order to reach acceptable MVP standards. I listed the various assignment requirements in the following sub-sections. Reference the links provided below to navigate through this section.

- [User Story](#user-story)
- [Required ReadMe Sections](#required-readme-sections)
- [Acceptance Criteria](#acceptance-criteria)

### User Story

This is the user story that was provided in the homework assignment's instructions.

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

### Required ReadMe Sections

When developing the script used to generate the readme file, the homework instructions specified that the following sections must be included in the generated readme file. My approach to this requirement was to include a unique question that would prompt the reader (using the NPM inquirer.prompt method) to enter content that would be assignment to each applicable generated readme section.

- At least one badge
- Project title
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
  - User GitHub profile picture
  - User GitHub email

### Acceptance Criteria

This is the acceptance criteria that was included in the homework assignment's instructions.

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```

## Executing the Script

### Node.js Module Used in Project

For this assignment, I used the following node.js module:

- **File System**
  - For this module, I used to _fs.writeFile_ method.

### NPM Module Used in Project

For this assignment, I used the following NPM module:

- **Inquirer**
  - For this module, I used the _inquirer.prompt_ method to prompt the user with specific readme content questions. I also used a _validate_ attribute that is available in the inquirer module in order to ensure each questions was answered.

### Main Commands to Execute Application

In order to execute the generate-readme application, the user must **first install node.js** in the local environment that is being used to execute this node.js application. If node.js has already been installed on your machine, you can skip the node.js installation step.

After install node.js, the user must run the the command listed below to ensure all applicable NPM modules are installed prior to running the application.

```sh
NPM install
```

Once node.js is installed and the user has run the `NPM install` command, the user can execute the application by enter the command listed below.

```sh
node index.js
```
