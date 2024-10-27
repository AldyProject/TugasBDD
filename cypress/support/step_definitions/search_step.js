const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

//Successfully search
Given('I am on the main page of the Zero Web App Security websites', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I enter the keyword "pay bills" into the search field',() =>{
    cy.get('#searchTerm').type('pay bills{enter}');
    cy.get('h2').contains('Search Results:');
});

Then('I should see search results that are relevant to the keyword "Zero - Pay Bills"', () => {
    cy.url().should('include', 'search.html?searchTerm=pay+bills');
});

//Failed search
Given('I am on the main page of the Zero Web App Security website', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I enter the keyword "payment" into the search field',() =>{
    cy.get('#searchTerm').type('payment{enter}');
    cy.get('h2').contains('Search Results:');
});

Then('I should see the message "No results found"', () => {
    cy.url().should('include', 'search.html?searchTerm=payment');
});

//Blank search
Given('I am on the main page of the Zero Web App Security websitee', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I do not enter anything into the search field',() =>{
    cy.get('#searchTerm').type(' {enter}');
    cy.get('h2').contains('Search Results:');
});

Then('I should see all search results', () => {
    cy.url().should('include', 'search.html?searchTerm=+');
});