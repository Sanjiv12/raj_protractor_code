
Feature: VDP - Trade In
A MST-C user selects Trade In after selecting a vehicle
 
#Scenario: Trade-in - KBB Modal

  #Given User is in Vehicle Details page
  #When User selects I finance or own my vehicle in Step 2
  #Then System should open KBB Trade-in value modal

Scenario: Trade-in - Add to PE

  Given User is in Vehicle Details page
  When User selects I finance or own my vehicle in Step 2
  And User inputs data of their trade-in vehicle
  #And User selects Add Trade-in to Payment Estimator
  #Then System should display the trade-in vehicle and value in Step 2. Get an instant trade-in estimate 
  #And System should call the Payment Service to update the payment terms