import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditarAluno = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("RC");
  const [ira, setIra] = useState("");
  
  const { id } = useParams(); // Pegando o ID do aluno pela URL
  const navigate = useNavigate(); // Para redirecionar após edição

  useEffect(() => {
    
    axios.get(`http://localhost:3001/alunos/${id}`)
      .then((response) => {
        const { nome, curso, ira } = response.data;
        setNome(nome);
        setCurso(curso);
        setIra(ira);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const alunoEditado = { nome, curso, ira };

    axios.put(`http://localhost:3001/alunos/atualizar/${id}`, alunoEditado)
      .then((response) => {
        console.log(response);
        navigate("/alunos/listar");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="page-content">
      <h1>Editar Aluno</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idNome" className="form-label">Nome</label>
          <input
            id="idNome"
            type="text"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="form-control"
          />
        </div>

        <div>
          <label htmlFor="idCurso" className="form-label">Curso</label>
          <select
            id="idCurso"
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
            className="form-select"
          >
            <option value="RC">Redes</option>
            <option value="CC">Ciência</option>
            <option value="ES">Engenharia de Software</option>
            <option value="DD">Design</option>
            <option value="EC">Engenharia da Computação</option>
          </select>
        </div>

        <div>
          <label htmlFor="idIra" className="form-label">IRA</label>
          <input
            id="idIra"
            type="text"
            name="ira"
            value={ira}
            onChange={(event) => setIra(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="div-button-submit">
          <button type="submit" className="btn btn-primary">ATUALIZAR</button>
        </div>
      </form>
    </div>
  );
};

export default EditarAluno;
