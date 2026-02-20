const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')

Given('I am logged in', async () => {
  // Abrimos login y autenticamos con un usuario válido de Sauce Demo
  await LoginPage.open()
  await LoginPage.login('standard_user', 'secret_sauce')
})

Given('I am on the inventory page', async () => {
  await expect(InventoryPage.inventoryContainer).toBeDisplayed()
})

When('I add the sauce labs backpack to the cart', async () => {
  await InventoryPage.addBackpackToCart()
})

Then('I should see {int} item in the cart', async (count) => {
  await expect(InventoryPage.cartBadge).toBeDisplayed()
  await expect(InventoryPage.cartBadge).toHaveText(String(count))
})