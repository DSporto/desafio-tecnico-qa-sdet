const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const productsPage = require("../../support/page_objects/ProductsPage");

Given("que acesso a página de produtos", () => {
  productsPage.acessarPaginaProdutos();
});

When("pesquiso pelo produto {string}", (produto) => {
  productsPage.pesquisarProduto(produto);
});

Then("devo visualizar o produto {string} nos resultados", (produto) => {
  productsPage.validarProdutoVisivel(produto);
});

Then("devo visualizar resultados relacionados à busca", () => {
  productsPage.validarResultadosDaBusca();
});

Then("não devo visualizar produtos correspondentes", () => {
  productsPage.validarProdutoInexistente();
});