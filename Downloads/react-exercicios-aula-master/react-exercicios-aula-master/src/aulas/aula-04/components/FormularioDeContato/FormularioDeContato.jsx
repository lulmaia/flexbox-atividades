import React, { useState } from "react";
import './FormularioDeContato.css';

const FormularioDeContato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        contato: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', JSON.stringify(formData));
    };

    return (
        <div className="form-container">
            <h3>Formulário de Envio</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input 
                        name="nome" 
                        type="text" 
                        value={formData.nome}
                        onChange={handleChange} 
                    />
                </label>

                <label>
                    Contato:
                    <input 
                        name="contato" 
                        type="text" 
                        value={formData.contato}
                        onChange={handleChange} 
                    />
                </label>

                <label>
                    Mensagem:
                    <textarea 
                        name="mensagem" 
                        value={formData.mensagem}
                        onChange={handleChange} 
                    />
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioDeContato;