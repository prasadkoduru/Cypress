# Cypress
This repository contains basic Cypress framework that can be explored and extended.
<div align="left">
    <img src="https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/fe882/cypress-logo.png" width="400px"</img> 
</div>

**» Pre-requisites to this course include:**

- Visual Studio Code: https://code.visualstudio.com/download
- Node.js: https://nodejs.org/en/download/
- Cypress: https://www.cypress.io/

**» Steps to use this project:**

1. Download this repo
2. Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located):
```
   npm install mocha --save-dev  
   npm install cypress-multi-reporters --save-dev
   npm install mochawesome --save-dev 
   npm install mochawesome-merge --save-dev 
   npm install mochawesome-report-generator --save-dev
   npm install mocha-junit-reporters
```
3. Install the following dependencies for accessibility tests (Remember that you will need a recent version of Cypress for the a11y tests to function correctly)
```
    npm install cypress-axe axe-core -D
```
   
**» Features:**

1. Mochawesome .html report

<div align="left">
    <img src="https://raw.githubusercontent.com/adamgruber/mochawesome/c896191fe4b8d0dcd9c596bb4976ff63b43649c6/docs/marge-report-1.0.1.png" width="400px"</img> 
</div>

2. Junit report genration in Circel CI
3. Option to take screenshots and videos
4. config.yml to customize Circel CI execution 
5. main.yml to run tests using Github actions
6. Integrated Cypress dashboard with Github actions

**» Steps to run this project:**

1. To execute locally, run the following command in terminal: npm run test
2. To run in Circle CI:
   - Register in Circle CI and link Git repository. Circle CI: https://circleci.com/integrations/github/
   - Schedule a job to run the scripts that refers config.yml
3. To run the accessbility tests, run the command: `npm run test:axe`
This will display the Cypress tests available to run from Cypress/integration folder. Clicking the spec a11y-tests.spec.js will start the a11y tests. 
This outputs the results in the console. Also, if you want to view any violations on the webpage (if they exist), click the line on the Cypress dialog which starts with 'A11Y ERROR!-'. This marks all the violations. 
   
