
# 🧪 Projeto de Testes com Newman e Cypress

Este projeto foi criado para executar testes automatizados utilizando o **Newman** (para coleções Postman) e o **Cypress** (para testes end-to-end).

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- `npm` (gerenciador de pacotes que já vem com o Node)

---

## 📦 Instalação das Dependências

Após clonar ou baixar o repositório, abra um terminal na pasta do projeto e execute:

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`, incluindo:

- `newman`
- `newman-reporter-htmlextra`
- `cypress`

---

## 📁 Estrutura recomendada

```plaintext
seu-projeto/
├── collections/
│   └── sua-colecao.postman_collection.json
├── cypress/
│   └── e2e/
│       └── seus-testes.cy.js
├── reports/
│   └── (relatórios HTML gerados pelo newman)
├── package.json
├── README.md
```

---

## 🚀 Como executar os testes

```bash
npm run test:newman
npm run test:cypress
```

### ✔️ Testes com Newman (coleção Postman)

Execute a seguinte linha no terminal para rodar a coleção:

```bash
npx newman run ./collections/sua-colecao.postman_collection.json -r htmlextra --reporter-htmlextra-export ./reports/relatorio.html
```

> Isso irá gerar um relatório detalhado em HTML na pasta `reports/`.

---

### 🌐 Testes com Cypress

#### Abrir interface visual do Cypress:

```bash
npx cypress open
```

#### Executar testes no modo headless (terminal):

```bash
npx cypress run
```