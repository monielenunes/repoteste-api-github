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

Crie o arquivo `cypress.env.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "GITHUB_TOKEN": "informe seu token pessoal do github",
  "GITHUB_USERNAME": "informe seu username usado no github"
}
```
💡 **Dica:** Para criar o arquivo via terminal, copie e cole o comando abaixo (substituindo pelos seus dados reais):

echo '{ "GITHUB_TOKEN": "seu_token_aqui", "GITHUB_USERNAME": "seu_usuario_github" }' > cypress.env.json


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
