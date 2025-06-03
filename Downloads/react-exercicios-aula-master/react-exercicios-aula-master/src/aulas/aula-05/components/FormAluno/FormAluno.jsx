import React, { useState } from 'react';
import './FormAluno.css';

const FormAluno = ({ onAlunoAdicionado }) => {
  const [aluno, setAluno] = useState({
    nome: '',
    matricula: '',
    email: '',
    curso: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3001/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno)
    });

    if (response.ok) {
      onAlunoAdicionado();
      setAluno({ nome: '', matricula: '', email: '', curso: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-aluno">
      <h2>Adicionar Aluno</h2>
      <div className="form-group">
        <label>Nome:</label>
        <input 
          type="text" 
          value={aluno.nome}
          onChange={(e) => setAluno({...aluno, nome: e.target.value})}
          required
        />
      </div>
           
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormAluno;