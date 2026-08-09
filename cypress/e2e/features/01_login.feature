# language: pt

Funcionalidade: Login

@WEB-01
Cenário: Login com usuário válido
Dado que acesso a página de login
Quando informo um e-mail válido
E informo uma senha válida
E clico no botão Login
Então devo visualizar minha conta

@WEB-01
Cenário: Login com senha inválida
Dado que acesso a página de login
Quando informo um e-mail válido
E informo uma senha inválida
E clico no botão Login
Então devo visualizar uma mensagem de erro

@WEB-01
Cenário: Logout de usuário autenticado
Dado que estou autenticado na aplicação
Quando solicito o logout
Então devo retornar para a página de login
E não devo permanecer autenticado