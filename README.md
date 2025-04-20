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
   git clone https://github.com/monielenunes/repoteste-api-github.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd repoteste-api-github
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## ⚙️ Configuração

**Importante:** Os testes não funcionarão sem um token de acesso pessoal do GitHub, pois a API exige autenticação para realizar operações como criar repositórios e issues.
Para seguir os próximos passos, é necessário ter esse token.

Caso você ainda não tenha um, gere acessando:
👉 [https://github.com/settings/tokens](https://github.com/settings/tokens)


Crie o arquivo `cypress.env.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "GITHUB_TOKEN": "informe seu token pessoal do github",
  "GITHUB_USERNAME": "informe seu username usado no github"
}
```
💡 **Dica:** Para criar o arquivo via terminal, copie e cole o comando abaixo (não se esqueça de substituir os campos `"seu_token_aqui` e `"seu_usuario_github"` com os seus dados):

echo '{ "GITHUB_TOKEN": "seu_token_aqui", "GITHUB_USERNAME": "seu_usuario_github" }' > cypress.env.json
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
