Feature: Data Search
         As a valid user
         I want to search for information on the Zero Web App Security website
         So that I can get the data I need quickly

Scenario: Searching for existing information
Given I am on the main page of the Zero Web App Security websites
When I enter the keyword "pay bills" into the search field
Then I should see search results that are relevant to the keyword "Zero - Pay Bills"

Scenario: Searching for information that does not exist
Given I am on the main page of the Zero Web App Security website
When I enter the keyword "payment" into the search field
Then I should see the message "No results found"

Scenario: Searching for information without keywords
Given I am on the main page of the Zero Web App Security websitee
When I do not enter anything into the search field
Then I should see all search results