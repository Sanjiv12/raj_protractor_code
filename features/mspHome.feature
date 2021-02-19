
Feature: MST-C Home page
A MST-C user navigates to the MST-C home page.
 
Scenario: User logs in to MST-C

  Given User is not in MST-C
  When User enters the MST-C url in the browser
  Then User should be taken to the MST-C home page

