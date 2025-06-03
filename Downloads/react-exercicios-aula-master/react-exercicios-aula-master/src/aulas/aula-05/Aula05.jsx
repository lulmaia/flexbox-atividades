import React, { useState, useEffect } from 'react';
import TabelaAlunos from './components/TabelaAlunos/TabelaAlunos';
import FormAluno from './components/FormAluno/FormAluno';
import './Aula05.css';

const API_URL = "http://localhost:3001/alunos";

const Aula05 = () => {
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setAlunos(data);
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  return (
    <div className="aula05-container">
      <h1>Gestão de Alunos</h1>
      <FormAluno onAlunoAdicionado={fetchAlunos} />
      <TabelaAlunos alunos={alunos} />
    </div>
  );
};

export default Aula05;