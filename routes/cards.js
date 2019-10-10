var express = require('express');
var router = express.Router();
var md5 = require('md5');

/* GET users listing. */
router.post('/', function(req, res, next) {
    const token = md5('ghfyfuyfiyf')
  res.json({
      token: token
    });
});

module.exports = router;
