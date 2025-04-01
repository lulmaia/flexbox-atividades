import React from 'react';
import Aluno from './Aluno'; // Importando o componente Aluno

const AlunosList = () => {
    // Array com os alunos
    const alunos = [
        { nome: 'João', email: 'joao@gmail.com', curso: 'Engenharia de Software' },
        { nome: 'Maria', email: 'maria@gmail.com', curso: 'Design Gráfico' },
        { nome: 'Pedro', email: 'pedro@gmail.com', curso: 'Análise de Sistemas' },
    ];

    return (
        <div>
            <h1>Lista de Alunos</h1>
            {alunos.map((aluno, index) => (
                <Aluno
                    key={index}
                    nome={aluno.nome}
                    email={aluno.email}
                    curso={aluno.curso}
                />
            ))}
        </div>
    );
};

export default AlunosList;
