class shipping{
    
    constructor(name, fee,delivery_date, expedited, address){
        this.name = name;
        this.address = address;
        this.delivery_date = delivery_date;
        this.expedited = expedited;
    }
}

export default shipping;