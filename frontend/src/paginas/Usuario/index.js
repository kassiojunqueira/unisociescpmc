import React, { useState } from 'react';
import './style.css';
import { useEffect } from 'react';
import api from '../services/api';

function Usuario() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        api.get('usuario').then(response => {
            setUsuarios(response.data);
        })
    }, []);

    return (
        <div>
        <h1>Usuarios</h1>
            <ul>{usuarios.length}</ul>
    </div>
    );
}

export default Usuario;