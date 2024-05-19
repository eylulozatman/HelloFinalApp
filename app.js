const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/', (req, res) => {
    res.send('login function is working');
  });

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
