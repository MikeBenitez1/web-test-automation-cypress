# web-test-automation-cypress
Personal basic project to practice web test automation with Cypress and Javascript for SauceLabs example web https://www.saucedemo.com/

![image](https://github.com/user-attachments/assets/4dde580b-ec2f-4809-989e-04cc6b1cf167)

## Table of Contents

1. [Requirements](#requirements)
2. [Getting Started](#getting-started)
3. [Tests Execution](#tests-execution)
4. [CI/CD](#cicd)
5. [Authors](#authors)

## Requirements

- NodeJS >20
- Cypress >13

## Getting Started

### Install dependencies to automate or just to run the test scenarios
* Install cypress with `npm install cypress --save-dev`.

## Tests Execution

### Run the test scenarios from cypress dashboard
* Simply run the following command `npx cypress open`.
* Click on the “E2E Testing” and "Continue" buttons.
* Choose a browser and click start.

### Run the test scenarios from command line
* To run the scenarios on chrome browser (not headless mode) use the following command `npx cypress run --headed --browser chrome` (if you want to run on Firefox or Electron browser simply replace them in command parameter).

* To run the scenarios on chrome browser (headless mode) use the following command `npx cypress run --browser chrome` (if you want to run on Firefox or Electron browser simply replace them in command parameter).

## CI/CD

- WIP 

## Authors

If you need the full list use the following command:
`sh git shortlog --summary --numbered`
