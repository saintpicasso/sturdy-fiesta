var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Workout' });
});

router.get('/push', function(req, res, next) {
  res.render('push', { title: 'Push' });
});

router.get('/pull', function(req, res, next) {
  res.render('index', { title: 'Pull' });
});

router.get('/leg', function(req, res, next) {
  res.render('index', { title: 'Leg' });
});

module.exports = router;
