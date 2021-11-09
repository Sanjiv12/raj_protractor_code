
Feature: Send Estimate Lead Forms
A MST-C user interacts with Lead Forms
 
Scenario: Send Estimate to Dealer Lead

  Given User is in Vehicle Details page
  When User clicks on Send Estimate to Dealer on a Price Summary
  Then System should display Send Estimate modal 
  And Payment term is same as selected in VDP

Scenario: Send Estimate to Dealer modal - field validation

  Given User is in Vehicle Details page
  When User clicks on Send Estimate to Dealer on a Price Summary
  And User does not enter valid values for email and zip in Send Estimate modal
  Then System should display the email text box in error state for sending estimate
  And System should display the zip text box in error state for sending estimate
  And Display Submit CTA in Disabled state

Scenario: Send Estimate to Dealer - Submit

  Given User is in Vehicle Details page
  When User clicks on Send Estimate to Dealer on a Price Summary
  And User has entered valid values for all fields in Send Estimate modal
  And User clicks on Submit
  Then System should display confirmation modal "Estimate sent!"

Scenario: Send Estimate to Dealer - Return to page

  Given User is in Vehicle Details page
  When User clicks on Send Estimate to Dealer on a Price Summary
  And User has entered valid values for all fields in Send Estimate modal
  And User clicks on Submit
  And User clicks on Return to page in Send Estimate confirmation modal
  Then User should be navigated to Vehicle Details page
