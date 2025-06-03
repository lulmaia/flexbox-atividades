import React from 'react';
import RenderizandoComFuncoes from './RenderizandoComFuncoes';
import TrabalhandoComImagens from './TrabalhandoComImagens';
import HookContador from './HookContador';
import HookMegaSena from './HookMegaSena';

const Aula02 = () => {
    return (
        <div>
            <h1>Aula 02: Vamos praticar?</h1>
            <div>
                <h2>Exercício 1: Renderizando com Funções</h2>
                <RenderizandoComFuncoes />
            </div>
            <div>
                <h2>Exercício 2: Trabalhando com Imagens</h2>
                <TrabalhandoComImagens />
            </div>
            <div>
                <h2>Exercício 3: Contador com Hook</h2>
                <HookContador />
            </div>
            <div>
                <h2>Exercício 4: Hook MegaSena</h2>
                <HookMegaSena />
            </div>
        </div>
    );
};

export default Aula02;
