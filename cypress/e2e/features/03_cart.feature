# language: pt

Funcionalidade: Carrinho de compras

  Cenário: Adicionar produto ao carrinho
    Dado que acesso a página de produtos
    Quando adiciono o produto "Blue Top" ao carrinho
    E acesso o carrinho
    Então devo visualizar o produto "Blue Top" no carrinho

  Cenário: Alterar quantidade de produto no carrinho
    Dado que acesso os detalhes do produto "Blue Top"
    Quando altero a quantidade para "2"
    E adiciono o produto ao carrinho
    Então a quantidade do produto deve ser "2"

  Cenário: Remover produto do carrinho
    Dado que tenho o produto "Blue Top" no carrinho
    Quando removo o produto do carrinho
    Então o carrinho deve ficar vazio