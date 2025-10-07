import express from 'express';
import { calculo } from './util.js';

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Desafio Técnico Morada.ai: Caixa Eletrônico API!');
});

app.post('/api/saque', (req, res) => {
    const valor: number = req.body?.valor;

    if (!valor) {
        return res.status(400).json({ error: 'Valor não fornecido.'});
    }

    if (isNaN(valor) || valor < 0 || !Number.isInteger(valor)) {
        return res.status(400).json({ error: 'Valor deve ser um número inteiro não negativo' });
    }
    try {
        const resultado = calculo(valor);
        return res.json(resultado);
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});