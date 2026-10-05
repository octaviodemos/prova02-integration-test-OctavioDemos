# API test automation with Jest and PactumJS

> Simple integration between JestJS and PactumJS.

## GitHub Actions

[![Node.js CI](https://github.com/ugioni/integration-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/integration-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_integration-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_integration-tests-jest)

# Getting Started

### Pactum docs:
 - [PactumJS](https://pactumjs.github.io/)

### Prerequisites:
 - NodeJS `v22`

### How to run?

Inside of the project folder run:

 1. `npm install --save-dev`
 1. `npm run ci`

After that you should see a `./output` folder with some `HTML` reports.

### Docs to Api under tests: 
 - [Dummyjson](https://dummyjson.com/docs)
 - [Gorest](https://gorest.co.in/)
 - [Toolshop API](https://api.practicesoftwaretesting.com/api/documentation)
 - [Deck of Cards](https://deckofcardsapi.com/)
 - [JSON placeholder](https://jsonplaceholder.typicode.com/)
 - [http bin](http://httpbin.org/)
 - [rick and morty api](https://rickandmortyapi.com/documentation/#rest)
 - [Petstore](https://petstore.swagger.io/#/) 
 - [ServeRest](https://serverest.dev/#/)
 - [ServeRest - Datadog](https://p.datadoghq.eu/sb/421fcfee-35ec-11ee-b87f-da7ad0900005-2aaf85264a89d11b7001bcab452a266e?refresh_mode=sliding&theme=light&tpl_var_env%5B0%5D=serverest.dev&from_ts=1699931511294&to_ts=1699932411294&live=true)

## Prova 02 - Testes da API Restful-API.dev

API testada: https://api.restful-api.dev

| Cenário | Método | Endpoint | Resultado esperado |
|---|---|---|---|
| Listar todos os objetos | GET | /objects | 200 e retorno em array |
| Buscar objeto por id | GET | /objects/1 | 200 e id igual a 1 |
| Cadastrar novo objeto | POST | /objects | 200, nome enviado e schema com id e name |
| Buscar o objeto cadastrado | GET | /objects/{id} | 200 e dados do cadastro |
| Editar o objeto cadastrado | PUT | /objects/{id} | 200 e nome editado |
| Excluir o objeto cadastrado | DELETE | /objects/{id} | 200 e id na mensagem |
| Buscar objeto excluído | GET | /objects/{id} | 404 |

Para executar: `npm install` e `npm run ci`.