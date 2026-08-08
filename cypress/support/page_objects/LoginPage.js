class LoginPage {
  acessarPaginaLogin() {
    cy.visit("/login");
  }

  informarEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  informarSenha(senha) {
    cy.get('[data-qa="login-password"]').type(senha);
  }

  clicarBotaoLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  validarLoginRealizado() {
    cy.contains("Logged in as").should("be.visible");
  }

  validarMensagemErro() {
    cy.contains("Your email or password is incorrect!").should("be.visible");
  }
}

module.exports = new LoginPage();