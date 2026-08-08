# Matriz de Rastreabilidade

Este documento relaciona os requisitos do desafio técnico aos cenários BDD, testes automatizados, evidências geradas e status atual da execução.

| Requisito | Funcionalidade | Cenário | Automação | Evidência | Status |
|---|---|---|---|---|---|
| WEB-01 | Login | Login com usuário válido | `cypress/e2e/features/01_login.feature` | Vídeo Cypress | ✅ Passando |
| WEB-01 | Login | Login com senha inválida | `cypress/e2e/features/01_login.feature` | Vídeo Cypress | ✅ Passando |
| WEB-02 | Busca | Buscar produto por nome exato | `cypress/e2e/features/02_search.feature` | Vídeo Cypress | ✅ Passando |
| WEB-02 | Busca | Buscar produto por nome parcial | `cypress/e2e/features/02_search.feature` | Vídeo Cypress | ✅ Passando |
| WEB-02 | Busca | Buscar produto inexistente | `cypress/e2e/features/02_search.feature` | Vídeo Cypress | ✅ Passando |
| WEB-03 | Carrinho | Adicionar produto ao carrinho | `cypress/e2e/features/03_cart.feature` | Vídeo Cypress | ✅ Passando |
| WEB-03 | Carrinho | Alterar quantidade de produto no carrinho | `cypress/e2e/features/03_cart.feature` | Vídeo Cypress | ✅ Passando |
| WEB-03 | Carrinho | Remover produto do carrinho | `cypress/e2e/features/03_cart.feature` | Vídeo Cypress | ✅ Passando |
| WEB-04 | Checkout | Realizar checkout com dados válidos | `cypress/e2e/features/04_checkout.feature` | Vídeo Cypress | ✅ Passando |
| WEB-05 | Validação | Bloquear pagamento com dados obrigatórios ausentes | `cypress/e2e/features/04_checkout.feature` | Vídeo Cypress | ✅ Passando |
| API-01 | GET Trello | Consultar action e validar status, estrutura e contrato | `cypress/e2e/api/trello/trello.cy.js` | Vídeo Cypress / logs | ✅ Passando |
| API-02 | POST Automation Exercise | Criar conta com dados únicos | `cypress/e2e/api/automationexercise/createAccount.cy.js` | Vídeo Cypress / logs | ✅ Passando |
| API-02 | POST Automation Exercise | Rejeitar criação sem e-mail | `cypress/e2e/api/automationexercise/createAccount.cy.js` | Vídeo Cypress / logs | ✅ Passando |

## Cobertura atual

- WEB-01 Login: coberto
- WEB-02 Busca: coberto
- WEB-03 Carrinho: coberto
- WEB-04 Checkout: coberto
- WEB-05 Validação: cobertura parcial
- API-01 GET Trello: coberto
- API-02 POST Automation Exercise: coberto

## Observações

A suíte completa possui atualmente 13 testes automatizados com resultado local:

```text
13 passing
0 failing