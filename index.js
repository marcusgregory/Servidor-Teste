const app = require('./server');

const port = 3000

app.listen(port, () => {
    console.log(`Servidor Iniciado e escutando na porta http://localhost:${port}`)
  })