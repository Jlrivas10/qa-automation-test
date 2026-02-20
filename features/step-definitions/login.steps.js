const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login.page');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When(/^I login with username "(.*)" and password "(.*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('inventory.html');

});

Then('I should see an error message', async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
});


