const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const cartPage = require("../../support/page_objects/CartPage");



When("adiciono o produto {string} ao carrinho", (produto) => {
  cartPage.adicionarProdutoAoCarrinho(produto);
});

When("acesso o carrinho", () => {
  cartPage.acessarCarrinho(); 
});

Then("devo visualizar o produto {string} no carrinho", (produto) => {
  cartPage.validarProdutoNoCarrinho(produto);
});

Given("que acesso os detalhes do produto {string}", (produto) => {
  cartPage.acessarDetalhesDoProduto(produto);
});

When("altero a quantidade para {string}", (quantidade) => {
  cartPage.alterarQuantidade(quantidade);
});

When("adiciono o produto ao carrinho", () => {
  cartPage.adicionarProdutoDetalhes();
});

Then("a quantidade do produto deve ser {string}", (quantidade) => {
  cartPage.validarQuantidade(quantidade);
});

Given("que tenho o produto {string} no carrinho", (produto) => {
  cartPage.adicionarProdutoEIrAoCarrinho(produto);
});

When("removo o produto do carrinho", () => {
  cartPage.removerProduto();
});

Then("o carrinho deve ficar vazio", () => {
  cartPage.validarCarrinhoVazio();
});