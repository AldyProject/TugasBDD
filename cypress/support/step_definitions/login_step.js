import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html"); // Sesuaikan dengan URL halaman login Anda
});

When("I submit login", () => {
  // Sesuaikan ID sesuai elemen yang ada di situs web
  cy.get("#user_login").type("username");
  cy.get("#user_password").type("password");
  cy.get(".btn").click();
});

Then("I should see homepage", () => {
  //cy.url().should("include", "/inventory.html"); // Sesuaikan URL yang diharapkan setelah login
  cy.get("#account_summary_tab > a").should("be.visible");
});