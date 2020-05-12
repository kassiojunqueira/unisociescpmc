import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../services/api';

function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            email,
            telefone
        };

        try {
            const response = await api.post('usuario', dados);
            const id = response.data.id;
            alert("Seu id de acesso:" + id);
            // history.push('/');
        } catch (error) {
            alert("Erro no Cadastro");            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <Link to="/">
                    Ja tenho cadastro
                </Link>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/> 

                    <input 
                        type="email" 
                        placeholder="Seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/> 

                    <input 
                        placeholder="telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)} /> 
                    <button className="button" type="submit">Cadastrar</button>
                </form>
    
            </div>
        </div>

    );
}

export default Cadastro;