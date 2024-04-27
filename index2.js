const express = require('express');

const app = express();

const ip = require('ip')

let broken = true 

app.get('/', async (req, res) => {
  console.log('/', broken, ip.address())

  if (broken) {
    res.status(500).send('error ' + ip.address());
  } else {
    res.send('<p>'+ broken ? 'this is broken :(' : 'works' + ip.address() +' </p>');
  }
});

app.get('/flip', async (req, res) => {
  console.log('/flip', broken, ip.address())
  broken = !broken;
  res.send('is broken: ' + broken + ' '+ ip.address());
});

app.get('/healthz', async (req, res) => {
  console.log('/healthz', broken, ip.address())
  if (!broken) {
    console.log('ok!!!!', ip.address());
    res.send('ok');
  } else {
    res.status(500).send('error ' + ip.address());
  }
});

const port = 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});