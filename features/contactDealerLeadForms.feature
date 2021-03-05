
Feature: Contact Dealer Lead Forms
A MST-C user interacts with Lead Forms
 
Scenario: Contact Dealer Lead from Footer

  Given User is in Model Selection page
  When User clicks on Contact Dealer in Footer  
  Then System should display Contact Dealer modal

Scenario: Contact Dealer modal - field validation 

  Given User is in Model Selection page
  When User clicks on Contact Dealer in Footer
  And User does not enter valid values for First Name, Last Name and Email
  Then System should display the first name text box in error state for contact dealer
  And System should display the last name text box in error state for contact dealer
  And System should display the email text box in error state for contact dealer
  And Display Send CTA in Disabled state

Scenario: Contact Dealer to Dealer - Submit 

  Given User is in Model Selection page
  When User clicks on Contact Dealer in Footer
  And User has entered valid values for all fields in Contact Dealer modal
  And User clicks on Send
  Then System should display confirmation modal

Scenario: Contact Dealer - Return to page

  Given User is in Model Selection page
  When User clicks on Contact Dealer in Footer
  And User has entered valid values for all fields in Contact Dealer modal
  And User clicks on Send
  And User clicks on Return to page in Contact Dealer confirmation modal
  Then User should be navigated to Model Selection page