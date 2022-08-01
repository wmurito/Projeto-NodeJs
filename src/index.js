import express from 'express'; // importando da biblioteca express, express é uma funçao refencidada que importa da lib express q foi instalada no npm install express
import routes from './routes.js';

const app = express();
const PORT = process.env.PORT || 3000; //criando uma porta dinamica, vindo da porta env

app.use(express.json());
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

