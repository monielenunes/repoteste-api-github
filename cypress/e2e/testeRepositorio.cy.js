const repoName = 'token-API-github';
const token = Cypress.env('GITHUB_TOKEN');
const username = Cypress.env('GITHUB_USERNAME');

describe('Testes GitHub API', () => {

  context('Criação de repositório', () => {
    it('Deve criar um repositório com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://api.github.com/user/repos',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          name: repoName,
          private: false,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(repoName);
      });
    });
  });

  context('Consulta ao repositório criado', () => {
    it('Deve retornar as informações do repositório', () => {
      cy.request({
        method: 'GET',
        url: `https://api.github.com/repos/${username}/${repoName}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(repoName);
      });
    });
  });

  context('Criação de issue', () => {
    it('Deve criar uma issue com sucesso no repositório', () => {
      cy.request({
        method: 'POST',
        url: `https://api.github.com/repos/${username}/${repoName}/issues`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          title: 'Teste de Issue',
          body: 'Esta é uma issue de teste',
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('Teste de Issue');
      });
    });
  });

  context('Consulta de issues', () => {
    it('Deve retornar a issue criada', () => {
      cy.request({
        method: 'GET',
        url: `https://api.github.com/repos/${username}/${repoName}/issues`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const issue = response.body.find(issue => issue.title === 'Teste de Issue');
      });
    });
  });

  context('Exclusão de repositório', () => {
    it('Deve excluir o repositório com sucesso', () => {
      cy.request({
        method: 'DELETE',
        url: `https://api.github.com/repos/${username}/${repoName}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });

  context('Tentativa de consulta ao repositório excluído', () => {
    it('Deve retornar erro 404 ao tentar acessar o repositório excluído', () => {
      cy.request({
        method: 'GET',
        url: `https://api.github.com/repos/${username}/${repoName}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
});


