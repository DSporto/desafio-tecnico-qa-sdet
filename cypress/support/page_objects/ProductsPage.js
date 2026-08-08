class ProductsPage {
  acessarPaginaProdutos() {
    cy.visit("/products");
  }

  pesquisarProduto(produto) {
    cy.get("#search_product")
      .should("be.visible")
      .clear()
      .type(produto);

    cy.get("#submit_search")
      .should("be.visible")
      .click();
  }

  validarProdutoVisivel(produto) {
    cy.contains(".productinfo p", produto)
      .should("be.visible");
  }

  validarResultadosDaBusca() {
    cy.contains("Searched Products")
      .should("be.visible");

    cy.get(".features_items .product-image-wrapper")
      .should("have.length.greaterThan", 0);
  }

  validarProdutoInexistente() {
    cy.contains("Searched Products")
      .should("be.visible");

    cy.get(".features_items .product-image-wrapper")
      .should("have.length", 0);
  }
}

module.exports = new ProductsPage();