class transaction{
    constructor(api_key, capture, amount, card_num){
        this.api_key =api_key;
        this.capture = capture;
        this.amount = amount;
        this.card_num = card_num;
    }
    
}

export default transaction;