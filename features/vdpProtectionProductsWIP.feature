
Feature: VDP - Protection Products
A MST-C user selects Protection Products after selecting a vehicle
 
Scenario: Protection products - Select plan 

  Given User is in Vehicle Details page
  When User selects a Protection product  
  Then System should update the total amount in Step 4
  And Price summary should be updated

#Scenario: Protection products - Change plan

  #Given User is in Vehicle Details page
  #When User selects a Protection product
  #And User changes the plan for the Protection product selected
  #Then System should remove the check from Selection check box
  #And Price summary should be updated 