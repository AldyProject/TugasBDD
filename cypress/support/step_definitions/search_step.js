import SearchPage from "../../e2e/search.page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Successfully search
Given('I am on the main page of the Zero Web App Security websites', () => {
    SearchPage.visit();
});

When('I enter the keyword "pay bills" into the search field',() =>{
    SearchPage.fillSearchValid('Pay bills{enter}');
    cy.get('h2').contains('Search Results:');
});

Then('I should see search results that are relevant to the keyword "Zero - Pay Bills"', () => {
    cy.url().should('include', 'search.html?searchTerm=Pay+bills');
});

//Failed search
Given('I am on the main page of the Zero Web App Security website', () => {
    SearchPage.visit();
});

When('I enter the keyword "payment" into the search field',() =>{
    SearchPage.fillSearchInvalid('payment{enter}');
    cy.get('h2').contains('Search Results:');
});

Then('I should see the message "No results found"', () => {
    cy.url().should('include', 'search.html?searchTerm=payment');
});

// //Blank search
Given('I am on the main page of the Zero Web App Security websitee', () => {
    SearchPage.visit();
});

When('I do not enter anything into the search field',() =>{
    SearchPage.fillSearchBlank(' {enter}');
    cy.get('h2').contains('Search Results:');
});

Then('I should see all search results', () => {
    cy.url().should('include', 'search.html?searchTerm=+');
});
