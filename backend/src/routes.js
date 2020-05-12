const express = require('express');

const routes = express.Router();
const connection = require('./database/connection');

routes.post('/usuario/', async (request, response) => {
    const {id, nome, email, telefone} = request.body;

    await connection('usuario').insert(
        {
            id,
            nome,
            email,
            telefone
        }
    )

    return response.send('Usuário ' + id + ' inserido com sucesso');
});

routes.get('/usuario/', async (request, response) => {
    const usuarios = await connection('usuario').select('*');

    return response.json(usuarios);
});

module.exports = routes;


