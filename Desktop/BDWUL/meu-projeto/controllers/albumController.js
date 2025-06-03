const Album = require('../models/album');

// Obter todos os álbuns
exports.getAllAlbums = (req, res) => {
    Album.getAll((err, results) => {
        if (err) {
            res.status(500).send({ error: 'Erro ao recuperar dados dos álbuns' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Criar um novo álbum
exports.createAlbum = (req, res) => {
    const { title, release_date, artist_id } = req.body;
    Album.create(title, release_date, artist_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Erro ao criar álbum' });
        } else {
            res.status(201).send({ message: 'Álbum criado com sucesso' });
        }
    });
};

// Atualizar um álbum
exports.updateAlbum = (req, res) => {
    const { id } = req.params;
    const { title, release_date, artist_id } = req.body;
    Album.update(id, title, release_date, artist_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Erro ao atualizar álbum' });
        } else {
            res.status(200).send({ message: 'Álbum atualizado com sucesso' });
        }
    });
};

// Deletar um álbum
exports.deleteAlbum = (req, res) => {
    const { id } = req.params;
    Album.delete(id, (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Erro ao deletar álbum' });
        } else {
            res.status(200).send({ message: 'Álbum deletado com sucesso' });
        }
    });
};
