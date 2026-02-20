const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')

Given('I have {int} item in the cart', async (count) => {
  // Agrega 1 item (backpack) y valida badge
  await expect(InventoryPage.inventoryContainer).toBeDisplayed()
  await InventoryPage.addBackpackToCart()

  await expect(InventoryPage.cartBadge).toBeDisplayed()
  await expect(InventoryPage.cartBadge).toHaveText(String(count))
})

When('I proceed to checkout', async () => {
  // Ir al carrito
  await InventoryPage.cartLink.click()
  await expect(CartPage.cartList).toBeDisplayed()

  // Ir al checkout step 1
  await CartPage.checkoutBtn.click()
  // Validación simple de que llegaste al form
  await expect(CheckoutPage.firstName).toBeDisplayed()
})

When('I enter my checkout information', async () => {
  await CheckoutPage.fillCheckoutInfo('Jorge', 'Rivas', '1000')
})

When('I finish the purchase', async () => {
  await CheckoutPage.finishPurchase()
})

Then('I should see the confirmation message', async () => {
  await expect(CheckoutPage.confirmationHeader).toBeDisplayed()
  await expect(CheckoutPage.confirmationHeader).toHaveText('Thank you for your order!')
})