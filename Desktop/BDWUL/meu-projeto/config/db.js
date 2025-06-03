const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Se você tiver senha, adicione-a aqui
    database: 'music_albums'
});

db.connect((err) => {
    if (err) {
        console.error('Erro na conexão com o banco de dados: ', err);
    } else {
        console.log('Conectado ao banco de dados MySQL');
    }
});

module.exports = db;
