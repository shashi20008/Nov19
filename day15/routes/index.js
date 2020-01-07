var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session-test', function(req, res) {
  const lastVisitTime = req.session.last_visit;
  req.session.last_visit = String(new Date());

  if(lastVisitTime === undefined) {
    res.send('Welcome to our website');
  } else {
    res.send('You have already visited us on: ' + lastVisitTime);
  }
});

router.get('/cookie-test', function(req, res) {
  if(req.cookies.foo === undefined) {
    res.cookie('foo', 'bar');
  }
  res.cookie('last_visit', String(new Date()));

  const lastVisitTime = req.cookies.last_visit;
  if(lastVisitTime === undefined) {
    res.send('Welcome to our website');
  } else {
    res.send('You have already visited us on: ' + lastVisitTime);
  }
  
});

module.exports = router;
