Feature: Checkout

  Scenario: Complete a purchase successfully
    Given I am logged in
    And I have 1 item in the cart
    When I proceed to checkout
    And I enter my checkout information
    And I finish the purchase
    Then I should see the confirmation message