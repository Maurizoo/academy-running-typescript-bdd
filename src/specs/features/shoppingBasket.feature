Feature: Shopping Basket

  Scenario: Add items to shopping basket
    Given I add 2 units of "The Hobbit" to my shopping basket
    And I add 5 units of "Breaking Bad"
    When I check the content of my shopping basket
    Then it should contain the following information
      | Key           | Value                                               |
      | Creation Date | '25/05/2021'                                        |
      | Items         | [['The Hobbit', 5.00, 2 ],['Breaking Bad',7.00, 5]] |
      | Total         | 45.00                                               |