import AlunoService from '../../services/AlunoService';
import { useState, useEffect } from 'react';

const ListarAlunosPorCurso = () => {
  const [alunos, setAlunos] = useState([]);
  
  useEffect(() => {
    AlunoService.getAlunosAxiosAsyncAwait(json => {
      setAlunos(json);
    });
  }, []);

  const alunosPorCurso = alunos.reduce((acc, aluno) => {
    if (!acc[aluno.curso]) {
      acc[aluno.curso] = [];
    }
    acc[aluno.curso].push(aluno);
    return acc;
  }, {});

  return (
    <div className="page-content">
      <h2>Alunos Agrupados por Curso</h2>
      
      {Object.keys(alunosPorCurso).map(curso => (
        <div key={curso} className="mb-5">
          <h3>{curso}</h3>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>IRA</th>
              </tr>
            </thead>
            <tbody>
              {alunosPorCurso[curso].map(aluno => (
                <tr key={aluno._id} className={aluno.ira >= 7 ? "acima-da-media" : ""}>
                  <td className={aluno.ira >= 7 ? "acima-da-media" : ""}>{aluno.nome}</td>
                  <td className={aluno.ira >= 7 ? "acima-da-media" : ""}>{aluno.ira}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ListarAlunosPorCurso;
