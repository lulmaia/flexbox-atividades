import React from 'react';
import Adicao from './Adicao';
import Subtracao from './Subtracao';
import Multiplicacao from './Multiplicacao';
import Divisao from './Divisao';

function Aula01() {
    return (
        <div>
            <Adicao num1={5} num2={3} />
            <Subtracao num1={5} num2={3} />
            <Multiplicacao num1={5} num2={3} />
            <Divisao num1={6} num2={3} />
        </div>
    );
}

export default Aula01;
