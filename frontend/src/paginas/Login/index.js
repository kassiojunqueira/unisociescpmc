import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import {FiLogIn} from 'react-icons/fi';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();

        console.log(email);
        console.log(password);

        localStorage.setItem('email', email);

        history.push('/perfil');
    }

    return (
    <div className="login-container">
        <form className="form" onSubmit={handleLogin}>
            <h1>Faça seu Login</h1>
            <input 
                type="email"
                placeholder="Informe seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value) } />

            <li>
                <ul>Nome</ul>
                <ul>Joao da Silva</ul>
                <ul>Botao Editar</ul>
                <ul>Botao Excluir</ul>
            </li>

            <li>
                <ul>Nome</ul>
                <ul>Joao da Silva</ul>
                <ul>Botao Editar</ul>
                <ul>Botao Excluir</ul>
            </li>            

            <li>
                <ul>Nome</ul>
                <ul>Joao da Silva</ul>
                <ul>Botao Editar</ul>
                <ul>Botao Excluir</ul>
            </li>

            <li>
                <ul>Nome</ul>
                <ul>Joao da Silva</ul>
                <ul>Botao Editar</ul>
                <ul>Botao Excluir</ul>
            </li>            

            <input 
                type="password"
                placeholder="Informe sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <button className="button" type="submit">Entrar</button>
            <Link to="/esquecisenha"><p>Esqueci minha senha</p></Link>
            <Link to="/cadastrar"><p><FiLogIn size={16} /> Não tenho cadastro</p></Link>
        </form>
    </div>
    );
}

export default Login;