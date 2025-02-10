// Elements and actions for login page

class loginPage{
    
    elements ={
        // Not recomended to use class locator but in this case there is no option :(
        loginHeader : () => cy.get('[class="login_logo"]'),
        userNameField : () => cy.get('[data-test="username"]'),
        PasswordField : () => cy.get('[data-test="password"]'),
        loginButton : () => cy.get('[data-test="login-button"]'),
    }

    validateLoginPage(){
        this.elements.loginHeader().contains('Swag Labs');
    }

    login(){
        this.elements.userNameField().type(Cypress.env("validUser"));
        this.elements.PasswordField().type(Cypress.env("validPassword"));
        this.elements.loginButton().click();
    }

}

module.exports = new loginPage();
