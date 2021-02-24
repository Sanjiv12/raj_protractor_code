
Feature: Lead Forms
A MST-C user interacts with Lead Forms
 
#Scenario: VLP Unlock Savings Lead

  #Given User is in Vehicle List Page
  #When User clicks on Unlock Savings on a Vehicle Card   
  #Then System should display Unlock Savings modal

Scenario: Unlock Savings modal - field validation 

  Given User is in Vehicle List Page
  When User clicks on Unlock Savings on a Vehicle Card
  And User does not enter valid values for email and zip
  #Then System should display the email text box in error state
  #And System should display the zip text box in error state
  #And Display Reveal Price CTA in disabled state