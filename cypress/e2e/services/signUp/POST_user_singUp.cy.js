import { faker } from '@faker-js/faker';

describe('Create a new user', () => {
  it('Should create a new admin user', () => {
    const user = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: "true"
    };

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: user,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      // Valida resposta da API
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("message", "Cadastro realizado com sucesso");
      expect(response.body).to.have.property("_id");

      // Opcional: log do usuário criado
      cy.log("Usuário criado:", JSON.stringify(user));
    });
  });
});
