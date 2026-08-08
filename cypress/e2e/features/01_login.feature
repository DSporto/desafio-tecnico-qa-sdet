# language: pt

Funcionalidade: Login

  Cenário: Login com usuário válido
    Dado que acesso a página de login
    Quando informo um e-mail válido
    E informo uma senha válida
    E clico no botão Login
    Então devo visualizar minha conta

  Cenário: Login com senha inválida
    Dado que acesso a página de login
    Quando informo um e-mail válido
    E informo uma senha inválida
    E clico no botão Login
    Então devo visualizar uma mensagem de erro