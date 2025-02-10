// Elements and actions for cart page

class cartPage{
    
    elements ={
        cartTitle : () => cy.get('[data-test="title"]'),
        itemQuantity : () => cy.get('[data-test="item-quantity"]')
    }

    validateCartPage(){
        this.elements.cartTitle().contains('Your Cart');
    }

    validateItemQuantity(){
        this.elements.itemQuantity().contains('1');
    }

}

module.exports = new cartPage();
