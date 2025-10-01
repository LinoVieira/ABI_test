# Cypress Web Automated Tests

Welcome to the Cypress Web Automated Test project! This project uses Cypress to perform end-to-end testing on web applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 12 or later)
- **npm** (comes with Node.js)

## Technologies Used

- [Cypress](https://www.cypress.io/) – End-to-end testing framework.  
- [Faker](https://github.com/faker-js/faker) – Fake data generation library.  
- [Mochawesome](https://www.npmjs.com/package/mochawesome) – Custom test report generator.  
- [ServerREST](https://github.com/typicode/json-server) – REST API simulator.


## Install cypress

To install Cypress and other project dependencies, run:
npm install

## Install faker
To install fake library to generate fake data:
- npm install @faker-js/faker --save-dev

## Install repports
To install Mochawesome Report
- npm install mochawesome mochawesome-report-generator --save-dev

## Open Cypress
After the installation is complete, you can open Cypress by running the following command:
npx cypress open

## Getting Started

Follow the steps below to set up the project and run the automated tests.
 
## Run Tests in Headless Mode
npx cypress run 

## Running a Specific Test
npx cypress run --spec 'cypress/e2e/exemplo_spec.js'

## Generating Reports (APPI / Mochawesome)

- Run all tests:
npm run cypress:run


- Merge multiple JSON reports (optional):
npm run report:merge


- Generate final HTML report:
npm run report:generate


- The final report will be available at:
cypress/reports/mochawesome.html

### Step 1: Clone the Repository

Clone the project repository using the following command:

git clone <git@github.com:LinoVieira/ABI_test.git>
