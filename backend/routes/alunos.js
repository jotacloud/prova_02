var express = require('express');
var router = express.Router();

const AlunoServiceMongo = require('../services/AlunoServiceMongo');

//MONGO
router.get('/listar', (request, response, next) => {
  AlunoServiceMongo.listar(request, response);
});

router.post('/criar', (request, response, next) => {
  AlunoServiceMongo.criar(request, response);
});

router.delete('/apagar/:id', (request, response, next) => {
  AlunoServiceMongo.apagar(request, response);
});

router.put('/editar/:id', (request, response, next) => {
  AlunoServiceMongo.update(request, response);
});

module.exports = router;
