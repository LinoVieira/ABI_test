describe('Get Users', () => {
    it('Should get the list of users', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false
      }).then((response) => {
        // Validações da resposta
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('quantidade');
        expect(response.body).to.have.property('usuarios');
        expect(response.body.usuarios).to.be.an('array');
  
        // Loga todos os usuários retornados
        cy.log('Usuarios:', JSON.stringify(response.body.usuarios));
      });
    });
  });
  