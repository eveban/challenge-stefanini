import Sequelize from "sequelize";

import Funcionario from "../modules/funcionario/entities/Funcionario";

const entities = [Funcionario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaeConfig);
    entities.map((entity) => entity.init(this.connection));
  }
}

export default new Database();
