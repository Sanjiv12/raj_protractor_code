
Feature: Unlock Savings Lead Forms
A MST-C user interacts with Lead Forms
 
Scenario: VLP Unlock Savings Lead

  Given User is in Vehicle List Page
  When User clicks on Unlock Savings on a Vehicle Card   
  Then System should display Unlock Savings modal

Scenario: Unlock Savings modal - field validation 

  Given User is in Vehicle List Page
  When User clicks on Unlock Savings on a Vehicle Card
  And User does not enter valid values for email and zip
  Then System should display the email text box in error state
  And System should display the zip text box in error state
  And Display Reveal Price CTA in disabled state

Scenario: Unlock Savings - Reveal Price

  Given User is in Vehicle List Page
  When User clicks on Unlock Savings on a Vehicle Card  
  And User has entered valid values for all fields
  And User clicks Reveal Price 
  Then System should display confirmation modal with $ Savings 
  And System should display confirmation modal with Smart Price for the vehicle

Scenario: Unlock Savings - Return to page

  Given User is in Vehicle List Page
  When User clicks on Unlock Savings on a Vehicle Card  
  And User has entered valid values for all fields
  And User clicks Reveal Price
  And User clicks on Return to page in the confirmation modal
  Then System should display all vehicle cards with Smart Price and Savings 
  And Price Filter should display Smart Price

Scenario: Unlock Savings - Navigate to VDP

  Given User is in Vehicle List Page
  When User clicks on Unlock Savings on a Vehicle Card  
  And User has entered valid values for all fields
  And User clicks Reveal Price
  And User clicks on Return to page in the confirmation modal
  And User clicks on any vehicle card to navigate to Vehicle Details page 
  Then System should display Smart Price with Savings for the vehicle

Scenario: Unlock Savings - from VDP

  Given User is in Vehicle Details page
  When User clicks on Unlock Savings on Vehicle info header
  Then System should display Unlock Savings modal
  
Scenario: Unlock Savings - Return to page VDP

  Given User is in Vehicle Details page
  When User clicks on Unlock Savings on Vehicle info header
  And User has entered valid values for all fields
  And User clicks Reveal Price
  And User clicks on Return to page in the confirmation modal
  Then System should display Smart Price with Savings for the vehicle
  And Price Summary should display additional line item for Additional Dealer Savings