import LoginPage from "../../e2e/login.page.js";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
  LoginPage.visit(); // Sesuaikan dengan URL halaman login Anda
});

When("I submit login", () => {
  // Sesuaikan ID sesuai elemen yang ada di situs web
  LoginPage.fillUsername('username');
  LoginPage.fillPassword('password');
  LoginPage.signIn();
});

Then("I should see homepage", () => {
  //cy.url().should("include", "/inventory.html"); // Sesuaikan URL yang diharapkan setelah login
  cy.get("#account_summary_tab > a").should("be.visible");
});
