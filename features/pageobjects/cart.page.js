const Page = require('./page')

class CartPage extends Page {
  get cartList () { return $('.cart_list') } // ✅ agregado
  get checkoutBtn () { return $('#checkout') }

  async goToCheckout () {
    await this.checkoutBtn.click()
  }

  open () {
    return super.open('/cart.html')
  }
}

module.exports = new CartPage()