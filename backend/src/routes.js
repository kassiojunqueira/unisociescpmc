const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/usuario/', async (request, response) => {
    const { id, nome, email, telefone} = request.body;
    await connection('usuario').insert(
        {
            id,
            nome,
            email,
            telefone
        }
    )
    return response.json({id});
});

routes.get('/usuario/', async (request, response) => {
    const usuarios = await connection('usuario').select('*');
    return response.json(usuarios);
});

routes.delete('/usuario/:id', async (request, response) => {
    const {id} = request.params;

    await connection('usuario').where('id', id).delete();

    return response.status(204).send();
});

module.exports = routes;