
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API do Encarte App funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado na porta ${PORT}`);
});
const cors = require('cors');
app.use(cors({
  origin: 'https://agenciaupcom.com.br'
}));
