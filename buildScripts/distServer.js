// Copy of srcServer to be able to run production version of teh app on local

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console*/
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  //Hard coding for simplicity. Pretend this is a real database
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Kowalski","email":"kowal@gmail.com"},
    {"id": 1, "firstName":"Rob", "lastName":"Nowak","email":"nowak@gmail.com"},
    {"id": 1, "firstName":"Tom", "lastName":"Marecki","email":"marecki@onet.pl"}
  ])
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
