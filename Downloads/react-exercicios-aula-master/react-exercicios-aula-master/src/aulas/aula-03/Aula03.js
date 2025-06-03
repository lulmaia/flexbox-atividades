import React from 'react';
import EstouConseguindoAprenderReact from './EstouConseguindoAprenderReact';
import Aluno from './Aluno';

const Aula03 = () => {
    const alunos = [
        { nome: 'João', email: 'joao@exemplo.com', curso: 'React' },
        { nome: 'Maria', email: 'maria@exemplo.com', curso: 'JavaScript' },
        { nome: 'Pedro', email: 'pedro@exemplo.com', curso: 'Front-end' }
    ];

    return (
        <div>
            <h1>Aula 03 - Ternário e Map</h1>

            <EstouConseguindoAprenderReact estouConseguindo={true} />

            <h2>Alunos:</h2>
            {alunos.map((aluno, index) => (
                <Aluno key={index} nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
            ))}
        </div>
    );
};

export default Aula03;
