
Feature: VDP - Payment Estimation - Defaults
A MST-C user selects a vehicle and checks the default payment options
 
Scenario: Navigating to VDP Payment Estimation - Defaults

  Given User is in Vehicle Details page
  Then Default tab is Lease
   And Cash down is 10% of listed price
  And Default Annual Mileage is 12000 miles
  And Default Credit Rating is Excellent
  And Default Terms are displayed
  And Default Term is selected
  

Scenario: Finance - Defaults

  Given User is in Vehicle Details page
  When User selects Finance 
  Then Cash down is 10% of listed price
  Then Default Finance Credit Rating is Excellent
  And Default Finance Terms are displayed
  And Default Term selected is 60 Months

Scenario: Payment Estimation - Lease

  Given User is in Vehicle Details page
  When User selects Lease 
  And User updates Mileage
  Then System should call the Payment service and update the payment terms