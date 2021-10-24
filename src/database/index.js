import Sequelize from "sequelize";

import Funcionario from "../modules/funcionario/entities/Funcionario";

import databaseConfig from "../config/database";

const entities = [Funcionario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    entities.map((entity) => entity.init(this.connection));
  }
}

export default new Database();
