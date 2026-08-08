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
- ESLint
- GitHub Actions

## Estrutura do projeto

```text
.github/
└── workflows/
    └── ci.yml

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

.env.example
.gitignore
cypress.config.js
eslint.config.js
package.json
README.md
TRACEABILITY.md
```

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js
- npm
- Git
- Google Chrome ou navegador compatível com Cypress

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

Em ambiente de integração contínua, as dependências são instaladas com:

```bash
npm ci
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

O arquivo `.env` contém configurações locais e não deve ser versionado.

O `.env.example` documenta as variáveis necessárias sem expor os valores utilizados no ambiente local ou no CI.

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

### Executar o lint

```bash
npm run lint
```

## Cenários Web automatizados

A suíte Web possui atualmente 10 cenários automatizados.

### Login

- Login com usuário válido
- Login com senha inválida

### Busca

- Busca de produto por nome exato
- Busca de produto por nome parcial
- Busca de produto inexistente

### Carrinho

- Adição de produto ao carrinho
- Alteração da quantidade do produto no carrinho
- Remoção de produto do carrinho

### Checkout

- Checkout com dados válidos
- Bloqueio do pagamento com dados obrigatórios ausentes

Os cenários Web são escritos em Gherkin e executados através da integração entre Cypress e Cucumber.

## Testes de API

### Trello

A automação realiza uma requisição GET para uma action do Trello e valida:

- resposta da requisição;
- estrutura esperada;
- propriedades utilizadas pelo cenário;
- contrato utilizando JSON Schema e AJV.

A informação de lista utilizada pelo teste é obtida em:

```text
data.list.name
```

### Automation Exercise

A automação valida a API de criação de conta, incluindo:

- criação com dados únicos;
- tentativa de criação sem e-mail;
- conteúdo da resposta;
- comportamento de negócio retornado pela API;
- contrato utilizando JSON Schema e AJV.

Dados únicos são utilizados na criação da conta para reduzir colisões entre execuções.

## Arquitetura

Os testes Web utilizam Page Object Model para separar as interações com as páginas das definições dos passos BDD.

As responsabilidades estão divididas entre:

- `features`: cenários escritos em Gherkin;
- `step_definitions`: implementação e orquestração dos passos;
- `page_objects`: seletores e ações das páginas;
- `api`: testes de serviços;
- `schemas`: contratos JSON utilizados nas validações de API;
- `fixtures`: dados auxiliares;
- `support`: configuração e comandos compartilhados.

Web e API permanecem no mesmo projeto Cypress, mas possuem separação lógica por diretórios e responsabilidades.

## Estratégia de testes

A estratégia foi construída priorizando os fluxos de maior risco para o usuário e para o negócio.

A suíte foi separada em:

- **Smoke:** autenticação e busca;
- **Web E2E:** login, busca, carrinho e checkout;
- **API:** Trello e Automation Exercise;
- **Lint:** análise estática do código;
- **CI:** execução automatizada em ambiente Linux.

Foram priorizados cenários positivos e negativos para validar comportamento funcional, regras de negócio e contratos de API.

Não são utilizadas esperas fixas como estratégia principal de sincronização. Os testes aguardam estados observáveis da aplicação, como URLs, elementos visíveis e respostas.

## Integração contínua

O projeto utiliza GitHub Actions.

O workflow está localizado em:

```text
.github/workflows/ci.yml
```

A pipeline é executada em alterações configuradas para a branch `main` e realiza:

1. checkout do projeto;
2. configuração do Node.js;
3. instalação das dependências com `npm ci`;
4. execução do lint;
5. execução da suíte automatizada;
6. armazenamento dos vídeos do Cypress;
7. armazenamento de screenshots quando houver falha.

As variáveis necessárias durante a execução no GitHub Actions são fornecidas através de Repository Secrets.

Os secrets utilizados são:

```text
BASE_URL
TRELLO_ACTION_ID
API_CREATE_ACCOUNT_URL
```

O timeout também é configurado no ambiente da pipeline.

## Evidências

O Cypress gera vídeos das execuções e screenshots em caso de falha.

Localmente, essas evidências são geradas em:

```text
cypress/videos/
cypress/screenshots/
```

Esses diretórios são ignorados pelo Git para evitar o versionamento de arquivos gerados automaticamente.

No GitHub Actions, os vídeos são publicados como artifact:

```text
cypress-videos
```

Os screenshots são configurados para publicação quando houver falha na execução.

Dessa forma, as evidências ficam disponíveis na própria execução da pipeline sem necessidade de versioná-las no repositório.

## Rastreabilidade

O projeto possui o arquivo:

```text
TRACEABILITY.md
```

A matriz relaciona requisitos, funcionalidades, cenários automatizados, arquivos responsáveis pela automação, evidências e status de execução.

Essa rastreabilidade facilita a identificação da cobertura existente e dos pontos que ainda podem ser expandidos.

## Configuração

Valores dependentes do ambiente são externalizados por meio do arquivo `.env`.

Atualmente são configurados:

- URL base da aplicação;
- identificador utilizado na API do Trello;
- endpoint da API de criação de conta;
- timeout padrão.

O `.env.example` serve como referência para configuração de novos ambientes.

O `.env` real não é versionado.

## Resultado atual

A suíte completa possui atualmente:

```text
Web:   10 testes
API:    3 testes
Total: 13 testes
```

Na última execução local registrada:

```text
13 passing
0 failing
```

A suíte também foi executada com sucesso através do GitHub Actions.

## Hipóteses assumidas

Durante a implementação, algumas decisões foram tomadas considerando as limitações do ambiente utilizado.

- O Automation Exercise é tratado como ambiente público de testes e pode apresentar indisponibilidade ou alterações sem aviso.
- O fluxo de pagamento utiliza dados fictícios e não representa uma transação financeira real.
- A criação de usuários pela API utiliza identificadores únicos para reduzir colisões entre execuções.
- O endpoint público utilizado no teste do Trello pode sofrer alterações de contrato ou disponibilidade.
- Falhas provocadas por indisponibilidade de dependências externas devem ser diferenciadas de defeitos funcionais da automação.

## Comportamentos observados

Durante as execuções realizadas foram observados:

- login válido permite acesso à aplicação;
- login inválido apresenta mensagem de erro;
- busca retorna produtos correspondentes;
- busca inexistente é tratada pela aplicação;
- produtos podem ser adicionados ao carrinho;
- quantidade de produto pode ser alterada;
- produtos podem ser removidos do carrinho;
- checkout pode ser concluído com dados válidos;
- o fluxo não conclui o pedido quando dados obrigatórios utilizados pelo cenário não são informados;
- a resposta utilizada da API do Trello disponibiliza a informação de lista em `data.list.name`;
- a API de criação de conta retorna informações de negócio no corpo da resposta.

## Limitações conhecidas

- O ambiente utilizado é público e não possui SLA conhecido.
- Não existe ambiente de homologação isolado sob controle do projeto.
- A suíte não possui cobertura ampla de múltiplos navegadores.
- Testes completos de acessibilidade, performance e segurança ofensiva não fazem parte da cobertura atual.
- Algumas telas dependem dos seletores disponibilizados pela própria aplicação.
- A cobertura de validações de campos obrigatórios pode ser expandida para validar mensagens individualmente.

## Riscos residuais

Os principais riscos que permanecem sem cobertura completa são:

- alterações de layout ou seletores do ambiente público;
- indisponibilidade das APIs externas;
- comportamento de sessão e logout ainda não coberto em profundidade;
- regras de preço, subtotal e inclusão duplicada no carrinho ainda não cobertas integralmente;
- cenários de fronteira de busca, como entrada vazia e normalização de espaços;
- validações negativas adicionais no checkout;
- comportamento em diferentes navegadores e resoluções.

## Decisões arquiteturais

Foi utilizado um único projeto Cypress para Web e API, mantendo separação lógica entre as suítes.

A arquitetura utiliza:

- Gherkin para especificação dos cenários Web;
- step definitions para implementação dos passos;
- Page Object Model para encapsular seletores e interações;
- diretórios independentes para testes de API;
- JSON Schema e AJV para validação de contratos;
- `.env` para configuração dependente de ambiente;
- ESLint para análise estática;
- GitHub Actions para integração contínua;
- artifacts do GitHub Actions para armazenamento de evidências.

A decisão de manter Web e API no mesmo repositório reduz duplicação de configuração e facilita a execução integrada sem misturar as responsabilidades das suítes.

## Troubleshooting

### O Cypress não encontra os testes

Verifique se o `specPattern` no `cypress.config.js` contempla os testes Web e API:

```text
cypress/e2e/features/**/*.feature
cypress/e2e/api/**/*.cy.js
```

### BASE_URL aparece como undefined

Confirme a existência do arquivo `.env` na raiz do projeto e utilize `.env.example` como referência.

Para validar o carregamento da variável:

```bash
node -e "require('dotenv').config(); console.log(process.env.BASE_URL)"
```

### Cypress.env não encontra uma variável de API

Confirme se:

- a variável está declarada no `.env`;
- o nome da variável está correto;
- ela está mapeada no bloco `env` do `cypress.config.js`.

### Testes falham apenas no CI

Verifique:

- Repository Secrets do GitHub;
- disponibilidade das aplicações externas;
- logs da etapa de execução dos testes;
- artifacts de vídeos;
- screenshots gerados em caso de falha.

### `npm ci` apresenta erro

Confirme se o arquivo `package-lock.json` está presente e atualizado.

Caso as dependências tenham sido alteradas localmente, execute:

```bash
npm install
```

e valide novamente antes de versionar o `package-lock.json`.

## Parecer crítico SDET

A aplicação permite automação funcional dos principais fluxos, porém existe dependência significativa de ambiente público e serviços externos.

A arquitetura adotada busca reduzir flakiness através de sincronização baseada em estados observáveis, separação de responsabilidades, isolamento dos cenários e geração de dados únicos quando necessário.

A cobertura atual contempla os principais fluxos definidos para Web e API, mas não deve ser interpretada como cobertura exaustiva do produto.

Em uma iniciativa real, os próximos incrementos recomendados seriam:

1. disponibilizar ambiente dedicado de homologação;
2. adotar seletores semânticos ou atributos `data-*` controlados pela equipe;
3. ampliar a cobertura negativa e de valores de fronteira;
4. incluir validações mais completas de sessão e logout;
5. ampliar as verificações de preço, subtotal e consistência do carrinho;
6. adicionar relatório HTML consolidado das execuções;
7. criar factories reutilizáveis para geração de massa de dados;
8. definir política de retry específica para CI e apenas quando tecnicamente justificável;
9. acompanhar flakiness através do histórico de execuções;
10. expandir testes de acessibilidade, performance e segurança de acordo com o risco e a criticidade do produto.

## Status da entrega

Até o momento, o projeto possui:

- automação Web com Cypress e Cucumber;
- automação de API;
- Page Object Model;
- validação de contratos com JSON Schema;
- configuração por variáveis de ambiente;
- proteção do arquivo `.env`;
- lint com ESLint;
- matriz de rastreabilidade;
- integração contínua com GitHub Actions;
- execução automatizada da suíte;
- armazenamento de vídeos como artifacts;
- screenshots configurados para falhas.

Os próximos incrementos estão documentados nas seções de riscos residuais e parecer crítico SDET.