# 🚀 Projeto de Automação de Testes - GitHub API com Cypress

Automação de testes utilizando Cypress para validar funcionalidades da API do GitHub.

---

## ✅ Funcionalidades Testadas

- Criação de repositório
- Consulta ao repositório criado
- Criação de uma issue
- Consulta à issue
- Exclusão do repositório
- Validação da exclusão

---

## 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/monielenunes/testesapi-github.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd github-api-test
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## ⚙️ Configuração

Crie o arquivo `cypress.env.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "GITHUB_TOKEN": "informe seu token pessoal do github",
  "GITHUB_USERNAME": "informe seu username usado no github"
}
```

**Importante:** Para gerar seu token pessoal, acesse:  
[https://github.com/settings/tokens](https://github.com/settings/tokens)

---

## ▶️ Execução dos Testes

- Para rodar os testes, execute o seguinte comando:
   ```bash
   npx cypress run
   ```
ou

- Para rodar o teste através da interface visual do Cypress:
   ```bash
   npx cypress open
   ```

---

## 📁 Estrutura do Projeto

```
github-api-tests/
├── cypress/
│   └── e2e/
│       └── testeRepositorio.cy.js
├── cypress.config.js
├── cypress.env.json  ← 🔐 Seu Token e Username vão aqui.
├── package-lock.json
├── package.json
├── README.md
```
