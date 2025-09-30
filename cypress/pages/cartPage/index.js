import { elements } from "./elements"
class Products {

    addProductsToCart(){
        cy.get(elements.product1)
        .click() 

        cy.get(elements.increaseQuantity)
        .click()

        cy.get(elements.addToCart)
        .click()
    }

    cartAssertPage(){
        cy.url()
      .should('eq', 'https://front.serverest.dev/carrinho');
    }
}
export default new Products()