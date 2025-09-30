
describe('Adding products to the cart', () => {
  beforeEach ('visit website', () => {
    cy.visit('https://front.serverest.dev/login')
  })
  
  it('should add products to the cart', () => {
    cy.get('[data-testid="email"]')
      .type('linosantos@lino.com')

    cy.get('[data-testid="senha"]')
      .type('lino1234')

    cy.get('[data-testid="entrar"]')
      .click()
    
    cy.url()
    .should('eq', 'https://front.serverest.dev/home');

    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .click()

    cy.get('[data-testid="product-increase-quantity"]')
      .click()

    cy.get('[data-testid="adicionar carrinho"]')
      .click()

    cy.url()
      .should('eq', 'https://front.serverest.dev/carrinho');
  })
})


