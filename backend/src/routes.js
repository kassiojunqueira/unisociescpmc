const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/usuario/', async (request, response) => {
    const { nome, email, telefone} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
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
    console.log(usuarios.length);
    return response.json(usuarios);
});

routes.delete('/usuario/', async (request, response) => {
    const {id} = request.param;

    await connection('usuario').where('id', id).delete();

    return response.status(204).send();
});

module.exports = routes;