const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const loginPage = require("../../support/page_objects/LoginPage");

let user;

Given("que acesso a página de login", () => {
  cy.fixture("users").then((users) => {
    user = users.validUser;
  });

  loginPage.acessarPaginaLogin();
});

When("informo um e-mail válido", () => {
  loginPage.informarEmail(user.email);
});

When("informo uma senha válida", () => {
  loginPage.informarSenha(user.password);
});

When("informo uma senha inválida", () => {
  loginPage.informarSenha("SenhaErrada123");
});

When("clico no botão Login", () => {
  loginPage.clicarBotaoLogin();
});

Then("devo visualizar minha conta", () => {
  loginPage.validarLoginRealizado();
});

Then("devo visualizar uma mensagem de erro", () => {
  loginPage.validarMensagemErro();
});

Given("que estou autenticado na aplicação", () => {
  cy.fixture("users").then((users) => {
    user = users.validUser;

    loginPage.realizarLogin(user.email, user.password);
  });
});

When("solicito o logout", () => {
  loginPage.clicarLogout();
});

Then("devo retornar para a página de login", () => {
  loginPage.validarLogoutRealizado();
});

Then("não devo permanecer autenticado", () => {
  cy.contains("Logged in as").should("not.exist");
});