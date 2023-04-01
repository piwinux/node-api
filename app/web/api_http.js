
import { makeData } from '../../lib/api.js';

import express from 'express';

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/api/get/hello', (req, res) => {
  res.send(makeData());
});

app.get('/api/get/date', (req, res) => {
  res.send(makeData());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
