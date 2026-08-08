class CheckoutPage {
  iniciarCheckout() {
    cy.contains("Proceed To Checkout")
      .should("be.visible")
      .click();
  }

  validarPaginaCheckout() {
    cy.url().should("include", "/checkout");
    cy.contains("Address Details").should("be.visible");
    cy.contains("Review Your Order").should("be.visible");
  }

  informarMensagem(mensagem) {
    cy.get('textarea[name="message"]')
      .should("be.visible")
      .clear()
      .type(mensagem);
  }

  avancarParaPagamento() {
    cy.contains("Place Order")
      .should("be.visible")
      .click();

    cy.url().should("include", "/payment");
  }

  preencherPagamentoValido() {
    cy.get('[data-qa="name-on-card"]')
      .should("be.visible")
      .type("QA Test User");

    cy.get('[data-qa="card-number"]')
      .type("4111111111111111");

    cy.get('[data-qa="cvc"]')
      .type("123");

    cy.get('[data-qa="expiry-month"]')
      .type("12");

    cy.get('[data-qa="expiry-year"]')
      .type("2030");
  }

  confirmarPedido() {
    cy.get('[data-qa="pay-button"]')
      .should("be.visible")
      .click();
  }

  validarConfirmacaoCompra() {
    cy.contains("Order Placed!")
      .should("be.visible");
  }

  confirmarSemDados() {
    cy.get('[data-qa="pay-button"]')
      .should("be.visible")
      .click();
  }

  validarPedidoNaoConcluido() {
    cy.url().should("include", "/payment");
    cy.contains("Order Placed!").should("not.exist");
  }
}

module.exports = new CheckoutPage();