var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var body = req.body
    
  res.json({
      message: "transação criada com sucesso"
    });
});

router.post('/:transaction_id', function(req, res, next) {
    var transaction = req.param.transaction_id;
    res.json({
        message: "pagamento confirmado"
      });
  });

module.exports = router;
