import * as MessageService from '../services/message.js';


async function sendMessage (request, response){
    const { message, phoneNumber} = request.body //criando 2 constant pra refatorar o codigo
    try{
    const responseMessage = await MessageService.send(message, phoneNumber);
    response.send(responseMessage);
    }catch(error){
        response.status(error.status).send(error);
    } 
}

export {sendMessage};