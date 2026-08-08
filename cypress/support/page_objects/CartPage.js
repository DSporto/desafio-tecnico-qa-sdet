class CartPage {
  acessarProdutos() {
    cy.visit("/products");
  }

  adicionarProdutoAoCarrinho(produto) {
    cy.contains(".productinfo p", produto)
      .parents(".product-image-wrapper")
      .find(".add-to-cart")
      .first()
      .click();

    cy.contains("Continue Shopping")
      .should("be.visible")
      .click();
  }

  acessarCarrinho() {
  cy.visit("/view_cart");

  cy.url().should("include", "/view_cart");

  cy.get("#cart_info")
    .should("be.visible");
}


  validarProdutoNoCarrinho(produto) {
    cy.get(".cart_description")
      .should("contain.text", produto);
  }

  acessarDetalhesDoProduto(produto) {
    cy.visit("/products");

    cy.contains(".productinfo p", produto)
      .parents(".product-image-wrapper")
      .contains("View Product")
      .click();
  }

  alterarQuantidade(quantidade) {
    cy.get("#quantity")
      .clear()
      .type(quantidade);
  }

  adicionarProdutoDetalhes() {
  cy.get("#quantity")
    .should("be.visible");

  cy.get("button.cart")
    .should("be.visible")
    .click();

  cy.get("#cartModal")
    .should("be.visible");

  cy.get('#cartModal a[href="/view_cart"]')
    .should("be.visible")
    .click();

  cy.url().should("include", "/view_cart");
}

  validarQuantidade(quantidade) {
  cy.get("#cart_info")
    .should("be.visible");

  cy.get(".cart_quantity")
    .should("be.visible")
    .and("contain.text", quantidade);
}

  adicionarProdutoEIrAoCarrinho(produto) {
    this.acessarProdutos();

    this.adicionarProdutoAoCarrinho(produto);

    this.acessarCarrinho();
  }

  removerProduto() {
    cy.get(".cart_quantity_delete")
      .first()
      .click();
  }

  validarCarrinhoVazio() {
    cy.contains("Cart is empty!")
      .should("be.visible");
  }
}

module.exports = new CartPage();