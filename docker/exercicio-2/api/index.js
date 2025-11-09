const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = 3000;

// Configuração de conexão usando as variáveis de ambiente
const dbConfig = {
    user: process.env.DB_USER,      // Lida com DB_USER (Requisito 1. API)
    host: process.env.DB_HOST,      // Lida com DB_HOST (hostname 'db')
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,  // Lida com DB_PASS
    port: 5432,
};

app.get('/', async (req, res) => {
    const client = new Client(dbConfig);

    try {
        await client.connect();

        // Simula uma operação no banco para provar a conexão
        const result = await client.query('SELECT NOW() AS current_time');

        res.status(200).json({
            status: "ok",
            message: "API conectada com sucesso ao banco de dados!",
            dbTime: result.rows[0].current_time,
            dbHost: dbConfig.host
        });

    } catch (err) {
        console.error('Erro de conexão com o banco de dados:', err.message);
        res.status(500).json({
            status: "error",
            message: "Falha na conexão com o DB. Verifique o serviço 'db' e as variáveis de ambiente.",
            errorDetails: err.message
        });
    } finally {
        await client.end();
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API rodando na porta ${PORT}`);
});