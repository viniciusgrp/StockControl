Olá.

Este é o repositório do Back End do projeto de controle de estoque.

Caso tenha interesse, o link do repositório do Front End é o seguinte:
https://github.com/viniciusgrp/StockControl-FE

Link do deploy do Back End:
https://stockcontrol.onrender.com/

Tecnologias utilizadas:
Node.Js, Express.Js, TypeScript, TypeORM, dotenv

Siga os passos a seguir para rodar localmente:

1 - Clone este repositório para uma pasta de sua preferência, abra o git e cole o seguinte comando:

git clone git@github.com:viniciusgrp/StockControl.git

2 - Abra a pasta do projeto com o VS Code, abra o terminal e digite o seguinte comando para instalar as depêndencias:

yarn

3 - Para rodar é necessário criar um banco de dados postgreSQL.

3.1 - Após criar o banco de dados, edite o arquivo .env seguindo o padrão presente nele mas alterando para as suas informações de acesso ao banco de dados.

4 - Este projeto é feito utilizando TypeORM, que cria as colunas do banco de dados automaticamente, para isso cole o seguinte comando no terminal:

yarn typeorm migration:run -d dist/data-source

5 - Inicie o servidor com o comando:

yarn dev

==========================================================================================================

Como utilizar as rotas:

Na pasta do repositório encontra-se um arquivo para importação no software Insomnia, para facilitar o uso.


Endpoint: /products

Rota get:

Parâmetros opcionais (query params):
orderBy: define a ordem de retorno dos itens, onde colocando um sinal de - antes deixa em ordem descendente opções: (name, -name, price, -price, quantityStock, -quantityStock)

limit: número que determina o limite de itens retornados

page: número da página de pesquisa

name: nome ou parte do nome do produto pesquisado, não sendo case sensitive e podendo ser parcial


Rota post:

Parâmetros obrigatórios (body):
name: string,
price: numero,
quantityStock: numero

Rota patch:

Parâmetros opcionais (body) iguais ao de post

Rota delete:

Passar o ID do item a ser excluido na rota, exemplo:

/produtos/5