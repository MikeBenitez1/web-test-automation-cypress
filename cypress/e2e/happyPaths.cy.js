import loginPage from "../pages/loginPage";
import productsPage from "../pages/productsPage";
import cartPage from "../pages/cartPage";

describe('Happy paths', () => {

  beforeEach('Login', () => {
    cy.login();
 });

  it('The user is able to add a backpack to cart', () => {
    productsPage.clickAddBackpack();
    productsPage.clickCart();
    cartPage.validateCartPage();
    cartPage.validateItemQuantity();
  })

  it('The user is able to logout', () => {
    productsPage.clickMenu();
    productsPage.clickLogout();
    loginPage.validateLoginPage();
  })

})
