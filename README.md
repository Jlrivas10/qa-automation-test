QA Automation Test – WebdriverIO + Cucumber

This project implements UI automated tests using WebdriverIO, Cucumber (BDD) and JavaScript, following the Page Object Model pattern.

- Framework & Tools
- WebdriverIO
- Cucumber
- JavaScript (Node.js)
- ChromeDriver

Automated Scenarios

- Successful login with valid credentials
- Adding a product to the cart
- Completing a purchase (end-to-end checkout flow)

These scenarios were selected to cover critical user flows and ensure functional stability of the application.

Project Structure

- features/ – Gherkin scenarios describing user behavior

- step-definitions/ – Reusable step implementations

- pageobjects/ – Page Object Model for UI interaction

How to Run

- npm install
- npx wdio run wdio.conf.js
