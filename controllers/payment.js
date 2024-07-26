const { json } = require('body-parser');
const midtransClient = require('midtrans-client');

class Payment{

    constructor(){}

    post(req,res){
        /*Install midtrans-client (https://github.com/Midtrans/midtrans-nodejs-client) NPM package.
npm install --save midtrans-client*/

//SAMPLE REQUEST START HERE

// Create Snap API instance
let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : 'SB-Mid-server-4tyjRHiNRBKYHyuguffWAdsr'
    });

let parameter = {
    "transaction_details": {
        "order_id": "G435516769",
        "gross_amount": 50000
    },
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "first_name": "budi",
        "last_name": "pratama",
        "email": "budi.pra@example.com",
        "phone": "08111222333"
    }
};

snap.createTransaction(parameter)
    .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        res.status(200).json(transactionToken)
        
        console.log('transactionToken:',transactionToken);
    })

    }


    get(req,res){
        res.send('get from class.this is connected to the github.the mysql2 is installed')

    }
}


module.exports = new Payment()