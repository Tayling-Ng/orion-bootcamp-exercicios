const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações de conexão com o PostgreSQL lidas do ambiente
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
};

const pool = new Pool(dbConfig);

// Rota de Health Check
app.get('/health', async (req, res) => {
    let dbStatus = 'down';
    let dbError = null;

    try {
        // Tenta conectar ao banco de dados
        await pool.query('SELECT 1');
        dbStatus = 'up';
    } catch (error) {
        dbError = error.message;
        console.error('Erro de conexão com o banco de dados:', dbError);
    }

    // Retorna o status da aplicação e do banco de dados
    res.status(200).json({
        status: 'ok',
        service: 'API',
        db_host: dbConfig.host,
        db_status: dbStatus,
        db_error: dbStatus === 'down' ? dbError : undefined,
    });
});

// Rota padrão (Apenas para ver se a API está ativa)
app.get('/', (req, res) => {
    res.send('API Principal rodando. Use /health para verificar o status do DB.');
});

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});