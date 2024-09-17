import { Link } from "react-router-dom";

import "../../css/crud.css";
import AlunoService from "../../services/AlunoService";

import { useState, useEffect } from "react";


const ListarAluno = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    AlunoService.getAlunosAxiosAsyncAwait((json) => {
      setAlunos(json);
    });
  }, []);

  const deleteAluno = (id) => {
    if(window.confirm(`Deseja realmente excluir id = ${id}`)){
      AlunoService.deleteAlunoById(
        id,
        (response) => {
          //console.log(response)
          const res = alunos.filter(
            (aluno) => aluno._id !== id
          )
          //console.log(res)
          setAlunos(res)
        }
      )
    }
  }

  const corpoTabela = () => {
    const novoArray = alunos.map(
      (aluno) => {
        return (
          <tr>
            <th scope="row">{aluno._id}</th>
            <td>{aluno.nome}</td>
            <td>{aluno.curso}</td>
            <td>{aluno.ira}</td>
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
        ); //return de cada elemento como um JSX
      } //funcao arrow
    ); //map
    return novoArray;
  };

  return (
    <div className="page-content">
      <h1>Listar Alunos</h1>
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
