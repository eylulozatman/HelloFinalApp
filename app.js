const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

//here login enpoint 

//here register endpoint

app.get('/register', (req, res) => {
    res.send('Hello, register page!');
  });

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
