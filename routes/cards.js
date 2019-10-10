var express = require('express');
var router = express.Router();
var md5 = require('md5');


/* GET users listing. */
router.post('/', function(req, res, next) {
    card_aux = req.body;
    
    const token = md5(card_aux.name + card_aux.number + card_aux.api_key);
    card ={
        name: card_aux.name,
        number : card_aux.number,
        api : card_aux.api_key,
        hash : token
    }
    global.cards.forEach(x=>{
        if(x.number == card.number && x.api_key == card.api_key)
            x = card;
    })
    global.cards.push(card);
  res.json({
      token: global.cards
    });
});

module.exports = router;
