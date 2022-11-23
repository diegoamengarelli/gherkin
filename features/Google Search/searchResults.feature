Feature: Google searching

Scenario: Search from the search bar produces correct links
    Given a web browser is at the Google home page
    When the user enters "Cucumber" into the search bar
    Then links related to "Cucumber" are shown on the results page
    