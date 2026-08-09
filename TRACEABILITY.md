# Matriz de Rastreabilidade

Este arquivo relaciona os cenários cobertos pela automação com os respectivos testes e evidências geradas durante a execução.

| ID | Funcionalidade | Cenário | Arquivo | Evidência | Status |
| --- | --- | --- | --- | --- | --- |
| WEB-01 | Login | Login com usuário válido | `cypress/e2e/features/01_login.feature` | Vídeo Cypress | ✅ Passando |
| WEB-01 | Login | Login com senha inválida | `cypress/e2e/features/01_login.feature` | Vídeo Cypress | ✅ Passando |
| WEB-01 | Login | Logout de usuário autenticado | `cypress/e2e/features/01_login.feature` | Vídeo Cypress | ✅ Passando |
| WEB-02 | Busca | Buscar produto por nome exato | `cypress/e2e/features/02_search.feature` | Vídeo Cypress | ✅ Passando |
| WEB-02 | Busca | Buscar produto por nome parcial | `cypress/e2e/features/02_search.feature` | Vídeo Cypress | ✅ Passando |
| WEB-02 | Busca | Buscar produto inexistente | `cypress/e2e/features/02_search.feature` | Vídeo Cypress | ✅ Passando |
| WEB-03 | Carrinho | Adicionar produto ao carrinho | `cypress/e2e/features/03_cart.feature` | Vídeo Cypress | ✅ Passando |
| WEB-03 | Carrinho | Alterar quantidade de produto no carrinho | `cypress/e2e/features/03_cart.feature` | Vídeo Cypress | ✅ Passando |
| WEB-03 | Carrinho | Remover produto do carrinho | `cypress/e2e/features/03_cart.feature` | Vídeo Cypress | ✅ Passando |
| WEB-04 | Checkout | Realizar checkout com dados válidos | `cypress/e2e/features/04_checkout.feature` | Vídeo Cypress | ✅ Passando |
| WEB-05 | Validação | Bloquear pagamento com dados obrigatórios ausentes | `cypress/e2e/features/04_checkout.feature` | Vídeo Cypress | ✅ Passando |
| API-01 | Trello | Consultar action e validar status, estrutura e contrato | `cypress/e2e/api/trello/trello.cy.js` | Vídeo / logs | ✅ Passando |
| API-02 | Automation Exercise | Criar conta com dados únicos | `cypress/e2e/api/automationexercise/createAccount.cy.js` | Vídeo / logs | ✅ Passando |
| API-02 | Automation Exercise | Rejeitar criação sem e-mail | `cypress/e2e/api/automationexercise/createAccount.cy.js` | Vídeo / logs | ✅ Passando |

## Cobertura atual

- `WEB-01` - Login: coberto
- `WEB-02` - Busca: coberto
- `WEB-03` - Carrinho: coberto
- `WEB-04` - Checkout: coberto
- `WEB-05` - Validações de checkout: cobertura parcial
- `API-01` - Trello: coberto
- `API-02` - Automation Exercise: coberto

## Resultado da execução

A última execução completa da suíte foi realizada localmente com o comando:

```bash
npm run test:all
```

Resultado:

```text
Web:   11 testes
API:    3 testes
Total: 14 testes

14 passing
0 failing
```

Os testes Web geram vídeos pelo Cypress e os testes de API também podem ser acompanhados pelos logs da execução.

A suíte também é executada pelo GitHub Actions, onde os vídeos do Cypress são armazenados como artifacts.