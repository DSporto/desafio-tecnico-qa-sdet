# language: pt

Funcionalidade: Checkout

  Cenário: Realizar checkout com dados válidos
    Dado que estou autenticado
    E que tenho o produto "Blue Top" no carrinho
    Quando inicio o checkout
    E reviso os dados do pedido
    E informo uma mensagem de pedido
    E avanço para pagamento
    E preencho os dados de pagamento válidos
    E confirmo o pedido
    Então devo visualizar a confirmação da compra

  Cenário: Bloquear pagamento com dados obrigatórios ausentes
    Dado que estou autenticado
    E que tenho o produto "Blue Top" no carrinho
    Quando inicio o checkout
    E avanço para pagamento
    E tento confirmar o pedido sem preencher os dados obrigatórios
    Então o pedido não deve ser concluído