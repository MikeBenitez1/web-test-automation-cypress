
import loginPage from "../pages/loginPage"
import productsPage from "../pages/productsPage";

Cypress.Commands.add('login', (email, password) => { 
    cy.visit(Cypress.env("baseUrl"));
    loginPage.validateLoginPage();
    loginPage.login();
    productsPage.validateProductsPage();
 })