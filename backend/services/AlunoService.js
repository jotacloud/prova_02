const AlunoModel = require('../models/AlunoModel');
const alunos = require('../data/db_aluno');

class AlunoService {
  static listar() {
    return alunos;
  }

  static criar(data) {
    let novoAluno = new AlunoModel(++id, data.nome, data.curso, data.ira);
    alunos.push(novoAluno);

    return novoAluno;
  }
}

module.exports = AlunoService;
