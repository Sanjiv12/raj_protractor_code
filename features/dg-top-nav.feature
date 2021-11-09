Feature: Digital Garage Top Nav Dropdown Menu

    A user clicks the top nav profile icon and views the dropdown menu,
    then proceeds to navigate to the available links via the dropdown.

    Scenario: Top Nav Dropdown - Menu is Visible
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then The Top Nav Menu Dropdown should be visible
    
    Scenario: Top Nav Dropdown - Profile Icon State Changes
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then The Profile Icon should be in Selected state
        
    Scenario: Top Nav Dropdown - Logged Out View Saves Linkout In Expected State
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Saves" Linkout should be present
        And Top Nav "Saves" Linkout Text should be "My Saves"
        And Top Nav "Saves" Linkout should link to "/saves"
        
    Scenario Outline: Top Nav Dropdown - Logged In View Saves Linkout In Expected State
        Given User is in Vehicle List Page
        And User is on desktop
        And User is logged in to account <account>
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Saves" Linkout should be present
        And Top Nav "Saves" Linkout Text should be "My Saves (<number_of_saves>)"
        And Top Nav "Saves" Linkout should link to "/saves"

        Examples:
            | account  | number_of_saves    |
            | example1 | 2                  |
            | example1 | 1                  |
    
    Scenario: Top Nav Dropdown - Manage Vehicles Linkout is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Owners" Linkout should be present
        And Top Nav "Owners" Linkout Text should be "Manage Vehicles"
        And Top Nav "Owners" Linkout should link to "/owners"

    Scenario Outline: Top Nav Dropdown - Continue Purchase Linkout in Correct State
        # The continue purchase link only shows in the top nav if the following conditions hold true:
        # - The user is logged in
        # - The user has an active deal
        # - The shopping cart is not displayed in the top nav

        Given User is in Vehicle List Page
        And User is on desktop
        And User is logged in to account <account>
        And Shopping Cart is "<shopping_cart_visibility>"
        And An active deal is <purchase_available>
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Continue Purchase" Linkout is <outcome>
        And Top Nav "Continue Purchase" Linkout should link to "/inventory/review"

        Examples:
            | account  | purchase_available | shopping_cart_visibility  | outcome   |
            | example1 | available          | hidden                    | shown     |
            | example2 | available          | shown                     | hidden    |
            | example3 | unavailable        | shown                     | hidden    |
            | example4 | unavailable        | hidden                    | hidden    |

Feature: Digital Garage Top Nav Dropdown Menu - Desktop, Not Logged In

    Scenario: Top Nav Dropdown - Temporary Saves Message is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Temporary Saved Items Message should be present
    
    Scenario: Top Nav Dropdown - Create Account Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Create Account Button should be present
    
    Scenario: Top Nav Dropdown - Sign In Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Sign In Button Message should be present

Feature: Digital Garage Top Nav Dropdown Menu - Desktop, Logged In

    Background:
        Given User is logged in to account <account>
    
    Scenario: Top Nav Dropdown - Create Account Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Manage Account Button should be present

        Examples:
            | account  |
            | example1 |
    
    Scenario: Top Nav Dropdown - Sign In Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Sign Out Button should be present

        Examples:
            | account  |
            | example1 |