var AlunoModel = require('../models/AlunoModelMongo');

class AlunoServiceMongo {
  static listar(request, response) {
    AlunoModel.find()
      .then(alunos => {
        response.json(alunos);
      })
      .catch(error => console.log(error));
  }

  static criar(request, response) {
    AlunoModel.create(request.body)
      .then(aluno => {
        response.json(aluno);
      })
      .catch(error => console.log(error));
  }

  static apagar(request, response) {
    AlunoModel.findByIdAndDelete(request.params.id)
      .then(aluno => {
        response.json(aluno);
      })
      .catch(error => console.log(error));
  }
}

module.exports = AlunoServiceMongo;
