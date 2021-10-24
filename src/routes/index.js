import { Router } from 'express';
import FuncionarioController from '../modules/funcionario/controllers/FuncionarioController';

const routes = Router();

routes.post('/funcionario', FuncionarioController.store);
routes.get('/funcionarios', FuncionarioController.index);
routes.put('/funcionario/:id', FuncionarioController.update);


export default routes;