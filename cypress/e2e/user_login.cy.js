describe('user login', () => {
    beforeEach ('visit website', () => {
      cy.visit('https://front.serverest.dev/login')
    })
  
    it('shoud login the user', () => {
      cy.get('[data-testid="email"]')
        .type('lino@lino2.com')
  
      cy.get('[data-testid="senha"]')
        .type('lino1234')
  
      cy.get('[data-testid="entrar"]')
        .click()
      
      cy.url()
      .should('eq', 'https://front.serverest.dev/home');
    })
  })