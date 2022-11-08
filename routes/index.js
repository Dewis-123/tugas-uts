var express = require('express');
var router = express.Router();
const {home, browse, streams, details, profile} = require('../function/controllers');

// const PI = require('../data/category');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', (request, response) => {
//   // console.log(PI);
//   response.render('index', {
//     subject: 'EJS template engine',
//     name: 'our template',
//     link: 'https://google.com'
//   });
// });

router.get('/', home);

router.get('/browse', browse);

router.get('/streams', streams);

router.get('/profile', profile);

router.get('/details/:id', details);

module.exports = router;
