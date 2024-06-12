const express = require('express');
const { Pool } = require('pg');

const PORT = 7000;
const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'princesas',
  password: 'ds564',
  port: '7007',
});

app.get('/princess', async (req, res) => {
  try {
    const resposta = await pool.query('SELECT * FROM princess')
    res.json({
      total: resposta.rowCount,
      princess: resposta.rows,
    })
    console.log(resposta);
  } catch (error) {
    console.error('Não foi possível obter as princesas', error)
    res.status(500).send('Não foi possível obter as princesas');
  }
});

app.post('/princess', async (req, res) => {
  try { 
    const { nome, poder } = req.body;
    await pool.query('INSERT INTO princess (nome, poder) VALUES ($1, $2)', [nome, poder]);
    console.log(nome);
  } catch (error) {
    console.error("Não foi possível criar as princesas", error);
    res.status(500).send("Não foi possível criar as princesas");
  }
});

app.put('/princess/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, poder } = req.body;
    await pool.query(
      'UPDATE princess SET nome = $1, poder = $2 WHERE id = $3',
      [nome, poder, id]
    );
  } catch (error) {
    console.error("Não foi possível editar as princesas", error);
    res.status(500).send("Não foi possível editar as princesas");
  }
});

app.delete('/princess/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM princess WHERE id = $1", [id]);
  } catch (error) {
    console.error("Não foi possível deletar as princesas", error);
    res.status(500).send("Não foi possível deletar as princesas");
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando${PORT}`)
})