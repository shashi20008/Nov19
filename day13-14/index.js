const express = require('express');
const fs = require('fs');
const app = express();

app.get('/home', function(req, res) {
  /**
   * Read synchronously.
   */
  const indexHtmlContent = fs.readFileSync('./index.html', 'utf8');
  res.send(indexHtmlContent);

  /**
   * Read async using callbacks (cb)
   */
  fs.readFile('./index.html', 'utf8', function(err, fileContents) {
    if(err) {
      console.log('Error', err);
      res.send('An Error occurred');
    }
    else {
      res.send(fileContents);
    }
  });

  /**
   * Read async using events
   */
  const readStream = fs.createReadStream('./index.html', 'utf8');
  // readStream.pipe(res);

  let fileContents = '';

  readStream.on('data', function(data) {
    fileContents = fileContents + data;
  });

  readStream.on('error', function(err) {
    console.log('an error occured!');
  });

  readStream.on('end', function() {
    res.send(fileContents);
  });
});

app.get('/foo', function fooHandler(req, res, next) {
  console.log('request came for /foo');
  // res.send('Hello world');
  next();
});

app.get('/foo', (req, res) => {
  res.send('This is from second handler for foo');
});

app.listen(8080, function() {
  console.log('Server started!');
});
