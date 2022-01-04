Feature: Purchases/Purchase Banner
A MST-C user has started a purchase

Scenario: Purchase Banner - Not logged in
    Given User is in Saves page and not logged in
    When User loads the Saves page
    Then no banner is displayed

Scenario: Purchase Banner - Empty state
    Given User is in Saves page and logged in
    And User has no purchases
    When User loads the Saves page
    Then no banner is displayed

Scenario: Purchase Banner - Continue Purchase CTA
    Given User is in Saves page and logged in
    When User clicks Continue Purchase
    Then User is redirected back to the page on the step they left off

Scenario: Purchase Banner - Edit CTA
    Given User is in Saves page and logged in
    When User clicks the More dropdown
    And User clicks Edit
    Then a confirmation modal appears
    And User confirms they want to edit purchase
    And User is redirected back to the VDP

Scenario: Purchase Banner - Cancel CTA
    Given User is in Saves page and logged in
    When User clicks the More dropdown
    And User clicks Cancel
    Then a confirmation modal appears
    And User confirms they want to cancel purchase
    And it is removed from the banner

Scenario: Purchase Banner - Vehicle Details modal
    Given User is in Saves page and logged in
    When User clicks Vehicle Details
    Then a modal pops up displaying correct information about the vehicle

Scenario: Purchase Banner - Price Details modal
    Given User is in Saves page and logged in
    When User clicks Price Details
    Then a modal pops up displaying a breakdown of the price for the vehicle

Scenario: Purchase Banner - Multiple Purchases
    Given User is in Saves page and logged in
    And User has more than one purchase
    When User clicks dropdown arrow
    Then a list of purchases is displayed
    And they can select which vehicle they want to interact with
