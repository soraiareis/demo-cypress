 
# Demo Cypress Automation Framework

## Table of Contents

- [Authors](#authors)
- [Pre-requisites](#pre-requisites)
- [Libraries](#libraries)
- [Running Tests](#running-tests)

## Authors
* [Soraia Reis](https://github.com/soraiareis)

## Pre-requisites

You should download and install these properly on your system. Visit the websites (linked) to find instructions on how to set them up.

* [Node.js](https://nodejs.org/en/) - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Install Node.js from <https://nodejs.org/en/>.
* [npm](https://www.npmjs.com/) - A package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer.

## Libraries

- [cypress](https://www.cypress.io/) - A JavaScript-based end-to-end testing framework.
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-example) - Library used to support Behavior-Driven Development (BDD) using Cucumber.

## Running Tests

You can run the tests by opening Cypress using the below command line. 
```
npm run cy:open
```

You can also execute all tests through the terminal with the command line below.
```
npm run cy:run
```

You can also specify which tags you want to execute by passing as an argument following the syntax `not @tag1 and (@tag2 or @tag3)` like the command line below:
```
npm run cy:tags --e TAGS='@login'
```

You can also change the `baseURL` by setting the `CYPRESS_BASE_URL` environment variable like the command line below:
```
CYPRESS_BASE_URL=http://the-internet.herokuapp.com npm run cy:run
```
