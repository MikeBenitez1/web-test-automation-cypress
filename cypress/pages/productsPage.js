// Elements and actions for product page

class productsPage{
    
    elements ={
        productTitle : () => cy.get('[data-test="title"]'),
        addBackpackButton : () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        cartButton : () => cy.get('[data-test="shopping-cart-link"]'),
        menuButton : () => cy.get('[id="react-burger-menu-btn"]'),
        logoutButton : () => cy.get('[data-test="logout-sidebar-link"]')
    }

    validateProductsPage(){
        this.elements.productTitle().contains('Products');
    }

    clickAddBackpack(){
        this.elements.addBackpackButton().click();
    }

    clickCart(){
        this.elements.cartButton().click();
    }

    clickMenu(){
        this.elements.menuButton().click();
    }

    clickLogout(){
        this.elements.logoutButton().click();
    }

}

module.exports = new productsPage();
