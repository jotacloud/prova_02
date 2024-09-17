import { Link } from 'react-router-dom';

import '../../css/crud.css';
import AlunoService from '../../services/AlunoService';

import { useState, useEffect } from 'react';

const ListarAluno = () => {
  const [alunos, setAlunos] = useState([]);
  const [colorirLinha, setColorirLinha] = useState(false);

  useEffect(() => {
    AlunoService.getAlunosAxiosAsyncAwait(json => {
      setAlunos(json);
    });
  }, []);

  const toggleColorirLinha = () => {
    setColorirLinha(!colorirLinha);
  };

  const deleteAluno = id => {
    const aluno = alunos.find(aluno => aluno._id === id);
    if (
      aluno &&
      window.confirm(`Deseja realmente excluir o aluno ${aluno.nome}?`)
    ) {
      AlunoService.deleteAlunoById(id, response => {
        const res = alunos.filter(aluno => aluno._id !== id);
        setAlunos(res);
      });
    }
  };

  const calcularMediaIRA = () => {
    if (alunos.length === 0) return 0;
    const somaIRA = alunos.reduce((acc, aluno) => acc + aluno.ira, 0);
    return (somaIRA / alunos.length).toFixed(2);
  };

  const mediaGeral = calcularMediaIRA();

  const corpoTabela = () => {
    return (
      <>
        {alunos.map(aluno => {
          let className = '';
          if (colorirLinha) {
            className =
              aluno.ira < mediaGeral ? 'abaixo-da-media' : 'acima-da-media';
          }

          return (
            <tr
              key={aluno._id}
              className={className}
            >
              <td className={className}>{aluno._id}</td>
              <td className={className}>{aluno.nome}</td>
              <td className={className}>{aluno.curso}</td>
              <td className={className}>{aluno.ira}</td>
              <td className="button-content">
                <Link
                  className="btn btn-primary"
                  to={`/alunos/editar/${aluno._id}`}
                >
                  Editar
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteAluno(aluno._id)}
                >
                  Apagar
                </button>
              </td>
            </tr>
          );
        })}
        <tr className="media-ira">
          <td
            className="media-ira"
            colSpan="3"
          >
            Média do IRA Geral
          </td>
          <td className="media-ira">{mediaGeral}</td>
        </tr>
      </>
    );
  };

  return (
    <div className="page-content">
      <h1>Listar Alunos</h1>
      <button onClick={toggleColorirLinha}>
        {colorirLinha ? 'Remover Cores' : 'Colorir Linhas'}
      </button>
      <table className="table table-striped table-content table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">IRA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{corpoTabela()}</tbody>
      </table>
    </div>
  );
};

export default ListarAluno;
