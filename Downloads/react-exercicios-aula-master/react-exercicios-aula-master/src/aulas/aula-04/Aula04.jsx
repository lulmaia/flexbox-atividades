import React from 'react';
import Campanha from './components/Campanha/Campanha';
import FormularioDeContato from "./components/FormularioDeContato/FormularioDeContato";
import Exercicio1 from './components/Exercicio1/Exercicio1';
import Exercicio2 from './components/Exercicio2/Exercicio2';

const Aula04 = () => {
  return (
    <div className="aula04-container">
      <Campanha mes="outubro"/>
      <h1>Exercício 4</h1>
      <FormularioDeContato />
      <div className="exercicios-container">
        <Exercicio1 />
        <Exercicio2 />
      </div>
    </div>
  );
}

export default Aula04;