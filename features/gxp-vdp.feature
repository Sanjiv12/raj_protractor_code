Feature: GXP Vehicle Details Page (VDP)
A MST-C user clicks GXP hearts on the VDP page.



Scenario: VDP - Invetory Save Heart AND Corect on Saves Page

  Given User is in Vehicle Details page
  When User clicks on inventory save heart
  And User loads the Saves page
  Then Saves page shows correct saved vehicle
  And User removes save
  And Vehicle disappears 
 
 