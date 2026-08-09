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

  realizarLogin(email, senha) {
    this.acessarPaginaLogin();
    this.informarEmail(email);
    this.informarSenha(senha);
    this.clicarBotaoLogin();
    this.validarLoginRealizado();
  }

  clicarLogout() {
    cy.contains("a", "Logout").should("be.visible").click();
  }

  validarLogoutRealizado() {
    cy.url().should("include", "/login");
    cy.get('[data-qa="login-button"]').should("be.visible");
    cy.contains("Logged in as").should("not.exist");
  }
}

module.exports = new LoginPage();