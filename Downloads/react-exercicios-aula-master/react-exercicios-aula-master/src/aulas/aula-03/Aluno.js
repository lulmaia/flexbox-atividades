import React from 'react';

const Aluno = ({ nome, email, curso }) => {
    return (
        <div>
            <h2>{nome}</h2>
            <p>{email}</p>
            <p>{curso}</p>
        </div>
    );
};

export default Aluno;
