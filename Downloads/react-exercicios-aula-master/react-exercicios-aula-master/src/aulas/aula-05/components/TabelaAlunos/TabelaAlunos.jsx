import React from 'react';
import './TabelaAlunos.css';

const TabelaAlunos = ({ alunos }) => {
  return (
    <div className="tabela-container">
      <h2>Lista de Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Email</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.email}</td>
              <td>{aluno.curso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAlunos;