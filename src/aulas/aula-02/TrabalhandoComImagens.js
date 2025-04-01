import React from 'react';
import imagem1 from '../../assets/imagem1.jpg';  // Importando imagem1 corretamente
import imagem2 from '../../assets/imagem2.jpg';  // Importando imagem2 corretamente

const TrabalhandoComImagens = () => {
    return (
        <div>
            <h2>Imagens de exemplo</h2>
            <div>
                <h3>Imagem da pasta public</h3>
                <img src={imagem1} alt="Imagem 1" width="200" />
            </div>
            <div>
                <h3>Imagem importada de assets</h3>
                <img src={imagem2} alt="Imagem 2" width="200" />
            </div>
        </div>
    );
};

export default TrabalhandoComImagens;
