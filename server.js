
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Ativa CORS para qualquer origem (pode restringir depois se quiser)
app.use(cors({
  origin: 'https://www.agenciaupcom.com.br'
}));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do Encarte App funcionando com CORS!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado na porta ${PORT}`);
});
