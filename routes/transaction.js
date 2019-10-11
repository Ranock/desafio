var express = require('express');
var router = express.Router();
var bdtrans =[

];
var id = 0;

router.post('/', function(req, res, next) { 
    id += 1;
    var body = req.body
    let trans = {
        index : id,
        trans : body
    }
    bdtrans.push(trans);
  res.json({
      message: "/api/v1/transaction/"+id,
    });
});

router.post('/:transaction_id', function(req, res, next) {
    var transaction = req.params.transaction_id;
    var trans = null; 
    bdtrans.forEach(x =>{
        if (x.index == transaction)
            trans = x.trans;
        });
    if (trans != null){ 
        
        res.json({
            capture: {
                api_key: trans.api_key,
                capture: true,
                ammount: trans.ammount
            }
        });
    }else{
        res.status(404).send();
    }
  });
  

module.exports = router;
