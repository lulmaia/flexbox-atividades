const db = require('../config/db');

const Album = {
    // Obter todos os álbuns
    getAll: (callback) => {
        db.query('SELECT * FROM album_artist_view', (err, results) => {
            callback(err, results);
        });
    },

    // Criar um novo álbum
    create: (title, release_date, artist_id, callback) => {
        const query = 'INSERT INTO albums (title, release_date, artist_id) VALUES (?, ?, ?)';
        db.query(query, [title, release_date, artist_id], (err, results) => {
            callback(err, results);
        });
    },

    // Atualizar um álbum
    update: (id, title, release_date, artist_id, callback) => {
        const query = 'UPDATE albums SET title = ?, release_date = ?, artist_id = ? WHERE id = ?';
        db.query(query, [title, release_date, artist_id, id], (err, results) => {
            callback(err, results);
        });
    },

    // Deletar um álbum
    delete: (id, callback) => {
        const query = 'DELETE FROM albums WHERE id = ?';
        db.query(query, [id], (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = Album;
