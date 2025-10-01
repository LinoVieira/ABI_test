class Home{

    loginPageAssert(){
        cy.url().should('eq', 'https://front.serverest.dev/home')
        cy.screenshot('Home page')
    }
    
}

export default new Home()