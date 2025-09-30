import { faker } from '@faker-js/faker';
import { elements } from "./elements"
class SignUp {
    signUpPage() {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
    }

    fillSignUpForm() {
        cy.get(elements.nome)
        .type('Lino Vieira')

    const randomemail = faker.internet.email()
        cy.get(elements.email)
        .type(randomemail)

        cy.get(elements.password)
        .type('lino1234')

        cy.get(elements.entrar)
        .click()
    }
    assertLoginPage(){
        cy.url()
        .should('eq', 'https://front.serverest.dev/login');
    }
}
export default new SignUp()