import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <h1>Menu da Aula 03</h1>
            <ul>
                <li>
                    <Link to="/aula03/exercicio1">Exercício 1 - Operador Ternário</Link>
                </li>
                <li>
                    <Link to="/aula03/exercicio2">Exercício 2 - Aluno</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
