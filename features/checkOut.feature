
Feature: Checkout
A MST-C user starts the checkout process

Scenario: Review Deal - logged in user 

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase  
  Then System should navigate the user to Review Deal page 
  And System should display Enter Zip Code modal

Scenario: Review Deal - Zip not confirmed 

  #Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User does not confirm Zip code in Enter Zip Code modal
  Then System should display Confirm your residential zip to proceed CTA at the bottom 
  And Display Edit Zip in Price details - Taxes & Fees highlighted in Red text
  And Display Next button in disabled state

Scenario: Review Deal - Confirm Zip modal

  #Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User does not confirm Zip code in Enter Zip Code modal
  And User clicks on Confirm your residential zip to proceed CTA 
  Then System should display Enter Zip Code modal

Scenario: Review Deal - Confirm Zip 

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  Then System should display updated Zip Code in Review Deal page as part of Taxes & Fees 
  And System should NOT display Confirm your residential zip to proceed CTA at the bottom
  And Display Next button in enabled state


Scenario: Review Deal - Finance selected 

  Given User is in Vehicle Details page
  When User Signs In
  And User selects Finance
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  Then System should display updated Zip Code in Review Deal page as part of Taxes & Fees 
  And System should NOT display Confirm your residential zip to proceed CTA at the bottom
  And Display Next button in enabled state

Scenario: Review Deal - Cash selected 

  Given User is in Vehicle Details page
  When User Signs In
  And User selects Cash
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  Then System should display updated Zip Code in Review Deal page as part of Taxes & Fees 
  And System should NOT display Confirm your residential zip to proceed CTA at the bottom
  And Display Next button in enabled state

Scenario: Review Deal - Edit Details 

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  When User clicks on Edit Details CTA
  Then User should be navigated to Vehicle Details page

Scenario: Review Deal - Choose Financing 

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  And User clicks on Next: Choose Financing CTA
  Then System should display Apply for Credit page with I have financing selected by default
  And Display Next button in enabled state

Scenario: Review Deal - I want financing  

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  And User clicks on Next: Choose Financing CTA
  And User clicks on I want financing
  Then System should display Apply financing modal

Scenario: Review Deal - User consents for sharing 

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  And User clicks on Next: Choose Financing CTA
  And User clicks on I want financing
  And User clicks on Accept in the Apply financing modal
  Then System should display authorization disclaimer below I want financing in selected state  
  And Display Next button in enabled state

Scenario: Review Deal - User does not give consent 

  Given User is in Vehicle Details page
  When User Signs In
  And User clicks on Start Purchase
  And User enters a valid Zip code in Enter Zip Code modal   
  And User clicks on Done in Zip Code Modal
  And User clicks on Next: Choose Financing CTA
  And User clicks on I want financing
  And User clicks on Not now in the Apply financing modal
  Then System should display authorization disclaimer below I want financing in de-selected state  
  And Display Next button in enabled state