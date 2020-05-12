import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Teste from './paginas/Teste';
import Usuario from './paginas/Usuario';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/cadastrar" component={Cadastro} />
                <Route path="/teste" component={Teste} />
                <Route path="/usuario" component={Usuario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;