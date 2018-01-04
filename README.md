# Leitura

Esse web app foi desenvolvido como projeto para o Nanodegree em React da Udacity. O projeto foi criado utilizando o create-react-app, e utiliza bibliotecas como o React-bootstrap, React Router e Redux.

## Instalação

Abra o terminal e vá para dentro da pasta do projeto. Então, execute o comando `yarn install` ou `npm install`. Esse comando vai instalar todas as dependencias. Depois basta executar `yarn start`.

Obs: É necessário ter acesso a um servidor que vai fornecer os dados que a aplicação vai consumir. Pode ser necessário alterar a variavel `url` dentro do arquivo src/api.js.

## O aplicativo

O aplicativo possui as funcionalidades básicas de um Blog. Permite adicionar, editar e remover Posts e comentários. Além de permitir votar em Posts e comentários. Também é possivel ordenar a exibição dos posts por data ou pontuação de votos. Não foi implementado sistema de autenticação de nenhum tipo, pois o servidor Api não suporta isso.