const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api', (req, res) => {
  res.json({message: "Hello World"});
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})