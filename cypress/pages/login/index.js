import { elements } from "./elements"
class Login {

    visitLoginPage(){
        cy.visit('https://front.serverest.dev/login')
    }

    inputData (){
        cy.get(elements.email)
        .type('lino@lino21.com')
  
        cy.get(elements.senha)
        .type('lino1234')
  
        cy.get(elements.entrar)
        .click()
        
    }
}
export default new Login()