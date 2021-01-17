# BACKEND STAR WARS

## Requisitos

- Tenha instalado o [docker](https://docs.docker.com/engine/install/) e o [compose](https://docs.docker.com/compose/install/).

## Configurações

- Gerar um arquivo `.env` apartir do [`.env.example`](.env.example)
- No arquivo `.env` teve ter as principais configurações
  - Obs.: DB_HOST sempre colocar o ip da rede local do pc host que irá ter os containers

## Rotas

- Gerei um arquivo [routes.json](routes.json) que podem ser encontrados as rotas.
  - Obs.: o arquivo foi gerado atravês do [insomnia](https://insomnia.rest/download/).
- O arquivo [character.routes.ts](src/useCases/characters/character.routes.ts) também contém espeficações sobre as rotas feitas e utilizadas para este projeto.

## Executando

- Feito os passos anteriores basta dar um `docker-compose up --build -d` que o servidor junto com o banco de dados irá subir dentro de 2 containers.
- Você poderá verificar o funcionamento do mesmo acessando pelo browser mesmo a rota `http://localhost:$SERVER_PORT/characters` (lembrando de substituir a $SERVER_PORT pela que está no seu arquivo `.env`).