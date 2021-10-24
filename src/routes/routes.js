import { Router } from 'express';
import funcionariosRouter from '@modules/User/routes/user.routes';

const routes = Router();

routes.use('/funcionario', funcionariosRouter );