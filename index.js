const express = require('express');

const app = express();

const ip = require('ip')

let broken = true 

const isBroken = () =>  broken ? 'this is broken :(' : 'works' 

app.get('/', async (req, res) => {
  console.log('/', isBroken(), ip.address())

  res.send('<p>'+ isBroken() + ip.address() +' </p>');
});

app.get('/flip', async (req, res) => {
  console.log('/flip', isBroken(), ip.address())
  broken = !broken;
  res.send('is broken: ' + true + ' '+ ip.address());
});

app.get('/healthz', async (req, res) => {
  console.log('/healthz', isBroken(), ip.address())
  if (!broken) {
    console.log('works', ip.address());
    res.send('ok');
  } else {
    res.status(500).send('error '+ip.address());
  }
});

const port = 80

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});