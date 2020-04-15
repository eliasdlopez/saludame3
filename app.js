const express = require('express');
const app = express();
app.use(express.urlencoded());

let saludame = '<form method="POST" action="/name">'
    saludame += '<input type="text" id="name" name="name" />'
    saludame += '<input type="submit" />'
    saludame += '</form>'

app.get ('/', (req, res) => {
  res.send(saludame);
});

app.post('/name', (req, res) => {
  const name = req.body.name

  res.send('<h1>' + 'Hola ' + name + '</h1>');
})

app.listen(3000, () => console.log('Saludame3'));
