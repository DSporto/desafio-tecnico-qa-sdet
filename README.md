# Desafio Técnico - Automação de Testes

Projeto de automação de testes Web e API desenvolvido com Cypress.

O projeto contempla cenários funcionais da aplicação Automation Exercise e testes de API utilizando Automation Exercise e Trello.

## Tecnologias utilizadas

- Node.js
- JavaScript
- Cypress
- Cucumber / Gherkin
- Page Object Model
- AJV
- JSON Schema
- dotenv

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── api/
│   │   ├── automationexercise/
│   │   │   └── createAccount.cy.js
│   │   └── trello/
│   │       └── trello.cy.js
│   ├── features/
│   │   ├── 01_login.feature
│   │   ├── 02_search.feature
│   │   ├── 03_cart.feature
│   │   └── 04_checkout.feature
│   └── step_definitions/
│       ├── loginSteps.js
│       ├── searchSteps.js
│       ├── cartSteps.js
│       └── checkoutSteps.js
├── fixtures/
├── schemas/
│   ├── createAccount.schema.json
│   └── trelloAction.schema.json
├── screenshots/
├── support/
│   ├── page_objects/
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   ├── commands.js
│   └── e2e.js
└── videos/
```

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js
- npm
- Google Chrome ou navegador compatível com Cypress

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Configuração de ambiente

Crie um arquivo `.env` na raiz do projeto utilizando `.env.example` como referência.

Exemplo:

```env
BASE_URL=https://www.automationexercise.com
TRELLO_ACTION_ID=SEU_ACTION_ID
API_CREATE_ACCOUNT_URL=https://www.automationexercise.com/api/createAccount
DEFAULT_TIMEOUT=10000
```

O arquivo `.env` não deve ser versionado.

## Execução dos testes

### Abrir o Cypress em modo interativo

```bash
npm run cypress:open
```

### Executar os testes Web

```bash
npm run test:web
```

### Executar os testes de API

```bash
npm run test:api
```

### Executar os testes Smoke

```bash
npm run test:smoke
```

### Executar todos os testes

```bash
npm run test:all
```

## Cenários Web automatizados

A suíte Web possui atualmente 10 cenários automatizados:

- Login com usuário válido
- Login com senha inválida
- Busca de produto por nome exato
- Busca de produto por nome parcial
- Busca de produto inexistente
- Adição de produto ao carrinho
- Alteração da quantidade do produto no carrinho
- Remoção de produto do carrinho
- Checkout com dados válidos
- Bloqueio do pagamento com dados obrigatórios ausentes

Os cenários são escritos em Gherkin e executados através da integração entre Cypress e Cucumber.

## Testes de API

### Trello

Valida uma requisição GET de uma action do Trello, incluindo:

- status HTTP
- estrutura da resposta
- propriedades esperadas
- contrato utilizando JSON Schema

### Automation Exercise

Valida a criação de conta através da API, incluindo:

- criação com dados únicos
- tentativa de criação com e-mail já existente
- status e conteúdo da resposta
- contrato utilizando JSON Schema

## Arquitetura

Os testes Web utilizam Page Object Model para separar a interação com as páginas das definições dos passos BDD.

As responsabilidades estão divididas entre:

- `features`: cenários escritos em Gherkin
- `step_definitions`: implementação dos passos
- `page_objects`: seletores e ações das páginas
- `api`: testes de serviços
- `schemas`: contratos JSON utilizados nas validações de API
- `fixtures`: dados auxiliares de teste

## Evidências

O Cypress está configurado para gerar vídeos das execuções e screenshots em caso de falha.

Os artefatos são armazenados em:

```text
cypress/videos/
cypress/screenshots/
```

## Configuração

Valores dependentes do ambiente são externalizados por meio do arquivo `.env`, incluindo:

- URL base
- identificador utilizado na API do Trello
- endpoint da API de criação de conta
- timeout padrão

O arquivo `.env.example` documenta as variáveis necessárias sem expor valores sensíveis.

## Resultado atual

A suíte completa possui:

```text
Web:   10 testes
API:    3 testes
Total: 13 testes
```

Na última execução local:

```text
13 passing
0 failing
```