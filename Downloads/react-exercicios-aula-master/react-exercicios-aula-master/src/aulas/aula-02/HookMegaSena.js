import React, { useState } from 'react';

const HookMegaSena = () => {
    const [numeroSorteado, setNumeroSorteado] = useState(null);
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    const sortearNumero = () => {
        if (numerosSorteados.length >= 6) {
            alert('Já temos 6 números sorteados!');
            return;
        }

        const numero = Math.floor(Math.random() * 60) + 1;
        setNumeroSorteado(numero);
        setNumerosSorteados([...numerosSorteados, numero]);
    };

    return (
        <div>
            <h1>Hook Mega Sena</h1>
            <button onClick={sortearNumero}>Sortear Número</button>
            {numeroSorteado && <p>Número sorteado: {numeroSorteado}</p>}
            <h2>Números Sorteados:</h2>
            <ul>
                {numerosSorteados.map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>
    );
};

export default HookMegaSena;
