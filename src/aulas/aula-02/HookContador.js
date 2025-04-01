import React, { useState } from 'react';

const HookContador = () => {
    const [contador, setContador] = useState(1);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementarContador}>Incrementar contador</button>
            <p>Já apertou {contador} vezes no botão.</p>
        </div>
    );
};

export default HookContador;
