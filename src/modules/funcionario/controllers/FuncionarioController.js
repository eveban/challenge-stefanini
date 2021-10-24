import Funcionario from "../entities/Funcionario";
import CreateFuncionarioService from "../services/CreateFuncionarioService";

export default {
  async create(request, response) {
    const data = request.body;
    const cliente = await CreateFuncionarioService.execute(data);
    return response.status(200).json(cliente);
  },
};
