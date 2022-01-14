Feature: Purchases/Purchase Banner
A MST-C user has started a purchase

Background:
    Given User is in Saves page
    And User is logged in

Scenario: Purchase Banner - Empty state
    Given User has no purchases
    When User loads the Saves page
    Then no banner is displayed

Scenario: Purchase Banner - Continue Purchase CTA
    Given User has at least one purchase
    And User clicks Continue Purchase
    Then User is redirected back to the page on the step they left off

Scenario: Purchase Banner - Edit CTA
    Given User has at least one purchase
    And User clicks the More dropdown
    And User clicks Edit
    And a confirmation modal appears
    Then User clicks Edit Purchase in the modal
    And User is redirected back to the VDP

Scenario: Purchase Banner - Cancel CTA
    Given User has only one purchase
    And User clicks the More dropdown
    And User clicks Cancel
    And a confirmation modal appears
    Then User clicks Cancel Purchase in the modal
    And the banner is no longer shown

Scenario: Purchase Banner - Vehicle Details modal
    Given User has at least one purchase
    And User clicks Vehicle Details on the Purchase Banner
    Then a modal pops up displaying information about the vehicle

Scenario: Purchase Banner - Price Details modal
    Given User has at least one purchase
    And User clicks Price Details on the Purchase Banner
    Then a modal pops up displaying price details for the vehicle
