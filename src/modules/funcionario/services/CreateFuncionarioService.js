import Funcionario from "../entities/Funcionario";

export default {
  async execute({ idade, nome, cargo }) {
    if (!nome) {
      return "Nome inválido";
    }
    const funcionario = await Funcionario.create({ idade, nome, cargo });
    return funcionario;
  },
};
