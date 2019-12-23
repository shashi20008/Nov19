const express = require('express');
const app = express();

app.get('/foo', function fooHandler(req, res, next) {
  console.log('request came for /foo');
  res.send('Hello world');
});

app.get('/foo', (req, res) => {
  res.send('This is from second handler for foo');
});

app.listen(8080, function() {
  console.log('Server started!');
});
