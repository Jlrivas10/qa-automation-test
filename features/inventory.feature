Feature: Inventory page

  Scenario: Add a product to the cart
    Given I am logged in
    And I am on the inventory page
    When I add the sauce labs backpack to the cart
    Then I should see 1 item in the cart