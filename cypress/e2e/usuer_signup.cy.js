import { faker } from '@faker-js/faker';

describe('user registration', () => {
  beforeEach ('visit website', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
  })

  it('shoud register a user with a random email', () => {
    cy.get('[data-testid="nome"]')
      .type('Lino Vieira')

    const randomemail = faker.internet.email()
    cy.get('[data-testid="email"]')
      .type(randomemail)

    cy.get('[data-testid="password"]')
      .type('lino1234')

    cy.get('[data-testid="entrar"]')
      .click()
    
    cy.url()
    .should('eq', 'https://front.serverest.dev/login');
  })
})