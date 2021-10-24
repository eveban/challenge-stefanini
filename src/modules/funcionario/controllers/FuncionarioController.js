import Funcionario from "../entities/Funcionario";
import CreateFuncionarioService from "../services/CreateFuncionarioService";

export default {
  async store(request, response) {
    const data = request.body;
    const funcionario = await CreateFuncionarioService.execute(data);
    return response.status(200).json(funcionario);
  },

  async index(request, response) {
    const funcionario = await Funcionario.findAll();
    return response.json(funcionario);
  },
};
