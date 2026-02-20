const { $ } = require('@wdio/globals')
const Page = require('./page')

class InventoryPage extends Page {

    get inventoryContainer () {
  return $('#inventory_container')
    }

    get addBackpackBtn () {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    get cartLink () {
        return $('.shopping_cart_link')
    }

    get cartBadge () {
        return $('.shopping_cart_badge')
    }

    async addBackpackToCart () {
        await this.addBackpackBtn.click()
    }

    async goToCart () {
  await this.cartLink.click()
    }

    open () {
        return super.open('/inventory.html')
    }
}

module.exports = new InventoryPage()