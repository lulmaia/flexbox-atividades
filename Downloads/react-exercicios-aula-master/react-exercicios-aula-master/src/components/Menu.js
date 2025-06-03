import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/aula00">Aula 00 - Hello World</Link></li>
        <li><Link to="/aula01">Aula 01 - Operações Matemáticas</Link></li>
        <li><Link to="/aula02">Aula 02 - Renderização Condicional</Link></li>
        <li><Link to="/aula03">Aula 03 - Ternário e Map</Link></li>
        <li className="menu-item"><Link to="/aula04">Aula 04 - Componentes e Formulários</Link></li>
        <li className="menu-item"><Link to="/aula05">Aula 05 - API de Alunos</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
