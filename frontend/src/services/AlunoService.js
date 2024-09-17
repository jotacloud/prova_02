import axios from "axios";

const url = "http://localhost:3001/";

const endpoints = {
  alunos: `${url}alunos/`
};

class AlunoService {
    static getAlunosAxiosAsyncAwait = async (callback) => {
      try {
        const response = await axios.get(`${endpoints.alunos}listar`);
        callback(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    static getAlunoById = (id, callback) => {
      axios
        .get(`${endpoints.alunos}listar/${id}`)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => console.log(error));
    };
  
    static atualizarAlunoById = (id, alunoEditado, callback) => {
      axios
        .put(`${endpoints.alunos}editar/${id}`, alunoEditado)
        .then((response) => {
          callback(response);
        })
        .catch((error) => console.log(error));
    };
  
    static deleteAlunoById = (id, callback) => {
      axios
        .delete(`${endpoints.alunos}apagar/${id}`)
        .then((response) => {
          //console.log(response);
          callback(response)
        })
        .catch((error) => console.log(error));
    };
  }
  
  export default AlunoService;