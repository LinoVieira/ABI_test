class Home{

    loginPageAssert(){
        cy.url().should('eq', 'https://front.serverest.dev/home')

    }
}

export default new Home()