import axios from "axios";

const url = "http://localhost:3001/professores/";

class AlunoService {
    static getAlunosAxiosAsyncAwait = async (callback) => {
      try {
        const response = await axios.get(url+"listar");
        callback(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    static getAlunoById = (id, callback) => {
      axios
        .get(`http://localhost:3001/professores/${id}`)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => console.log(error));
    };
  
    static atualizarAlunoById = (id, alunoEditado, callback) => {
      axios
        .put(`http://localhost:3001/alunos/${id}`, alunoEditado)
        .then((response) => {
          callback(response);
        })
        .catch((error) => console.log(error));
    };
  
    static deleteAlunoById = (id, callback) => {
      axios
        .delete(`http://localhost:3001/alunos/apagar/${id}`)
        .then((response) => {
          //console.log(response);
          callback(response)
        })
        .catch((error) => console.log(error));
    };
  }
  
  export default AlunoService;