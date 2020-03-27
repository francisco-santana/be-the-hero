const cors = require('cors');
const express = require('express');
const routes = require('./routes');

/*
    Rotas / Recursos
*/

/*
    Métodos HTTP

    GET: buscar informação do backend
    POST: criar uma informação no backend
    PUT: alterar uma informação no backend
    DELETE: deletar uma informação no backend
*/

/**
 *  Tipos de parâmetros
 * 
 *  Query Params: parâmetros nomeados enviados na rota apos "?" (filtros, paginação)
 *  Route Params: parâmetros utilizados para identificar recursos
 *  Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: select * from users
   * Query builde: table('users').select('*').where()
   */
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

