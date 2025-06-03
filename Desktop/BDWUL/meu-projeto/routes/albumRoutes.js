const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

// Rota para obter todos os álbuns
router.get('/', albumController.getAllAlbums);

// Rota para criar um álbum
router.post('/', albumController.createAlbum);

// Rota para atualizar um álbum
router.put('/:id', albumController.updateAlbum);

// Rota para deletar um álbum
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
