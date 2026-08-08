# language: pt

Funcionalidade: Busca de produtos

  Cenário: Buscar produto por nome exato
    Dado que acesso a página de produtos
    Quando pesquiso pelo produto "Blue Top"
    Então devo visualizar o produto "Blue Top" nos resultados

  Cenário: Buscar produto por nome parcial
    Dado que acesso a página de produtos
    Quando pesquiso pelo produto "Blue"
    Então devo visualizar resultados relacionados à busca

  Cenário: Buscar produto inexistente
    Dado que acesso a página de produtos
    Quando pesquiso pelo produto "ProdutoInexistenteQA999"
    Então não devo visualizar produtos correspondentes