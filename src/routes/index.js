import { Router } from 'express';
import FuncionarioController from '../modules/funcionario/controllers/FuncionarioController';

const routes = Router();

routes.post('/funcionario', FuncionarioController.create);

export default routes;