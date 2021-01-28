import express from 'express';
import { activeUsersController } from './controllers/active-users';
import { downwardsController } from './controllers/downwards-repos';

export const routes = express.Router();

routes.get('/v1/active/:user', activeUsersController);
routes.get('/v1/downwards/:repo', downwardsController);
