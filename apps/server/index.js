const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const client = path.resolve(__dirname, '..', 'client');
const build = path.join(client, 'build');
const html = path.join(build, 'index.html');

const app = express();

app.use(express.static(build));

app.get('/foo', function (req, res) {
  return res.send('bar');
});

app.get('/api', function (req, res) {
  return res.json({ foo: 'bar' });
});

app.get('*', function (req, res) {
  res.sendFile(html);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})
