describe('User login', () => {
    it('Should login successfully with an existing user', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: "linotest@qa.com.br",
            password: "teste1234"
        },
        failOnStatusCode: false
      }).then((response) => {
        // Validações da resposta
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Login realizado com sucesso");
        expect(response.body).to.have.property("authorization"); // token JWT
      });
    });
  });
  