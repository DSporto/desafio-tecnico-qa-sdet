const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const loginPage = require("../../support/page_objects/LoginPage");
const cartPage = require("../../support/page_objects/CartPage");
const checkoutPage = require("../../support/page_objects/CheckoutPage");

let user;

Given("que estou autenticado", () => {
  cy.fixture("users").then((users) => {
    user = users.validUser;

    loginPage.acessarPaginaLogin();
    loginPage.informarEmail(user.email);
    loginPage.informarSenha(user.password);
    loginPage.clicarBotaoLogin();
    loginPage.validarLoginRealizado();
  });
});

When("inicio o checkout", () => {
  checkoutPage.iniciarCheckout();
});

When("reviso os dados do pedido", () => {
  checkoutPage.validarPaginaCheckout();
});

When("informo uma mensagem de pedido", () => {
  checkoutPage.informarMensagem("Pedido automatizado para teste QA");
});

When("avanço para pagamento", () => {
  checkoutPage.avancarParaPagamento();
});

When("preencho os dados de pagamento válidos", () => {
  checkoutPage.preencherPagamentoValido();
});

When("confirmo o pedido", () => {
  checkoutPage.confirmarPedido();
});

Then("devo visualizar a confirmação da compra", () => {
  checkoutPage.validarConfirmacaoCompra();
});

When("tento confirmar o pedido sem preencher os dados obrigatórios", () => {
  checkoutPage.confirmarSemDados();
});

Then("o pedido não deve ser concluído", () => {
  checkoutPage.validarPedidoNaoConcluido();
});