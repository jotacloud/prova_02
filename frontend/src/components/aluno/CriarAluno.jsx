import "../../css/crud.css"
import { useState } from "react"

import axios from "axios"

const url = "http://localhost:3001/";

const endpoints = {
  alunos: `${url}alunos/`
};

const CriarAluno = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("RC")
    const [ira, setIra] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const novoAluno = {nome, curso, ira}
        postAlunoAxiosThenCatch(novoAluno)
    }

    const postAlunoAxiosThenCatch = (novoAluno) => {
        axios.post(`${endpoints.alunos}criar`, novoAluno)
        .then((response) => {
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="page-content">
            <h1>Criar Aluno</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="idNome" className="form-label">
                        Nome
                    </label>
                    
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
                    <label htmlFor="idCurso" className="form-label">
                        Curso
                    </label>
                    
                    <select
                        id="idCurso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                        className="form-select"
                    >
                        <option value="RC">Redes de Computadores</option>
                        <option value="CC">Ciência da Computação</option>
                        <option value="ES">Engenharia de Software</option>
                        <option value="DD">Design Digital</option>
                        <option value="EC">Engenharia da Computação</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="idIra" className="form-label">
                        IRA
                    </label>
                    
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
                    <button type="submit" className="btn btn-primary">
                        SUBMETER
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CriarAluno