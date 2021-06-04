
Feature: VDP - Accessories
A MST-C user selects Accessories after selecting a vehicle
 
Scenario: Accessories Modal

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  Then System should open Accessories modal with list of accessories available for the vehicle

Scenario: Accessories Detail Modal

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on View Details CTA for an accessory
  Then System should open Accessories detail modal

Scenario: Select from Accessory Detail modal

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on View Details CTA for an accessory
  And User clicks on "Select" CTA
  Then System should open Accessories modal with list of accessories available for the vehicle 
  And The Accessory should be displayed as selected
  And Count of accessories selected and Total value should be updated

Scenario: Select from Accessory modal

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on Select check box for an accessory
  Then The Accessory should be displayed as selected
  And Count of accessories selected and Total value should be updated


Scenario: Select Accessory - Done

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on Select check box for an accessory
  And User clicks on Done
  Then Personalize with Accessories should display the list of accessories selected
  And System should call the Payment service and update the payment terms

Scenario: Remove Accessory from VDP 

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on Select check box for an accessory
  And User clicks on Done
  And User clicks on Remove CTA for an accessory
  Then Accessory should be removed from Personalize with Accessories 
  And System should call the Payment service and update the payment terms

Scenario: Remove Accessory from Accessories modal 

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on Select check box for an accessory
  And User deselects the Select check box
  Then Accessory should be deselected
  And Count of accessories selected and Total value should be updated


Scenario: Remove Accessory from Accessories detail modal 

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on Select check box for an accessory
  And User clicks on View Details CTA for an accessory
  When User clicks on Remove CTA 
  Then System should navigate back to Accessories modal 
  And Accessory should be deselected
  And Count of accessories selected and Total value should be updated


Scenario: Remove All Accessory from Accessories modal 

  Given User is in Vehicle Details page
  When User clicks Select Accessories in Step 3
  And User clicks on Select check box for an accessory
  When User clicks on Remove All CTA
  And Accessory should be deselected
  And Count of accessories selected and Total value should be updated