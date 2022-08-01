import { Router } from 'express';
import * as MessageController from './controllers/message.js';

const routes = Router();

routes.get('/', (request, response)=>{// funçao de callback request e response
    response.send('API tech-academy ');
});

routes.post('/send', MessageController.sendMessage);

export default routes;