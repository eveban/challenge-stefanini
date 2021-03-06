import Sequelize, { Model } from "sequelize";

class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idade: {
          type: Sequelize.INTEGER,
        },

        nome: {
          type: Sequelize.STRING,
        },

        cargo: {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "funcionarios",
        timestamps: false,
        sequelize,
      }
    );
  }
}

export default Funcionario;