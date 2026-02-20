const Page = require('./page')

class CheckoutPage extends Page {

  // Paso 1
  get firstName () { return $('#first-name') }
  get lastName () { return $('#last-name') }
  get postalCode () { return $('#postal-code') }
  get continueBtn () { return $('#continue') }

  // Paso 2 (Overview)
  get finishBtn () { return $('#finish') }

  // Paso 3 Complete
  get confirmationHeader () {
    return $('.complete-header')
  }

  async fillCheckoutInfo (first, last, zip) {
    await this.firstName.setValue(first)
    await this.lastName.setValue(last)
    await this.postalCode.setValue(zip)
    await this.continueBtn.click()
  }

  async finishPurchase () {
    await this.finishBtn.click()
  }

}

module.exports = new CheckoutPage()