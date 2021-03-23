
Feature: VDP - Protection Products
A MST-C user selects Protection Products after selecting a vehicle
 
Scenario: Protection products Detail modal

  Given User is in Vehicle Details page
  When User clicks on Learn more CTA for a Protection product 
  Then System should open Protection products detail modal with Plan Name
  And System should open Protection products detail modal with Plan Description
  And System should open Protection products detail modal with Video
  And System should open Protection products detail modal with Length of Coverage
  #And System should open Protection products detail modal with Monthly / Total $
  And System should open Protection products detail modal with Total Due at Signing
  And System should open Protection products detail modal with Select CTA
  And System should open Protection products detail modal with Plan Detail
  And System should open Protection products detail modal with View Brochure
  And System should open Protection products detail modal with Disclaimers at the bottom

Scenario: Protection products - Change plan

  Given User is in Vehicle Details page
  When User selects a Protection product
  And User changes the plan for the Protection product selected
  Then System should remove the check from Selection check box
  And Price summary should be updated 

Scenario: Select from PP Detail modal

  Given User is in Vehicle Details page
  When User clicks on Learn more CTA for a Protection product
  And User clicks on Select CTA
  Then System should navigate back to Vehicle Details page with the protection product selected
  And Price summary should be updated

Scenario: Remove from PP Detail modal 

  Given User is in Vehicle Details page
  When User selects a Protection product
  And User clicks on Learn more CTA for a Protection product
  When User clicks on Remove CTA for the Protection product
  Then System should navigate back to Vehicle Details page with the protection product deselected
  And Price summary should be updated

Scenario: Remove PP from VDP 

  Given User is in Vehicle Details page
  When User selects a Protection product
  And User deselects the Select check box for the Protection product
  Then System should navigate back to Vehicle Details page with the protection product deselected
  And Price summary should be updated

Scenario: Change Payment term

  Given User is in Vehicle Details page
  When User selects a Protection product
  And User changes the Payment term in Step 1
  Then System should display warning message
  And Deselect all the Protection products
  And System should call the Payment service and update the payment terms 

Scenario: Protection products - Do not display

  Given Protection products feature is not enabled for the dealer
  When User is in Vehicle Details page for the disabled dealer 
  Then Protect your vehicle should not be displayed 