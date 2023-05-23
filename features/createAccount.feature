
Feature: Create Account
A MST-C user creates an account for check out

# Scenario: Start Purchase 

#   Given User is in Vehicle Details page
#   When User clicks on Start Purchase
#   Then System should navigate to Create Account Page
#   And Display the Email text box
#   And Display the First name text box
#   And Display the Last name text box
#   And Display the Phone number text box
#   And Display the Password text box
#   And Display Google Social Login
#   And Display Facebook Social Login
#   And Display Apple Social Login
#   And Display Create Account CTA as disabled
# @smoke
# Scenario: Create Account - Field validation 

#   Given User is in Vehicle Details page
#   When User clicks on Start Purchase
#   And User does not enter valid values for Email, Name, Phone and Password
#   Then System should display the first name text box in error state for create account
#   And System should display the last name text box in error state for create account
#   And System should display the email text box in error state for create account
#   And System should display the phone text box in error state for create account
#   And Display Create Account CTA as disabled

# @regression
# Scenario: Create Account - Password validation

#   Given User is in Vehicle Details page
#   When User clicks on Start Purchase
#   And User starts entering password
#   Then System should validate the mandatory conditions and display ones which are satisfied with a tick mark
# @smoke
# Scenario: Create Account - Check your email

#   Given User is in Vehicle Details page
#   When User clicks on Start Purchase
#   And User enters an email id not registered previously
#   And User enters First and Last name not registered previously
#   And User enters Phone not registered previously
#   And User enters a valid password
#   And User clicks on Create Account
#   Then System should display Check your mail page
@regression
Scenario: Create Account - Account already registered

  Given User is in Vehicle Details page
  When User clicks on Start Purchase
  And User enters an email id registered previously
  And User enters First and Last name registered previously
  And User enters Phone registered previously
  And User enters a valid password
  And User clicks on Create Account
  Then System should display Sign In page