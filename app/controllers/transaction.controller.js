var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');

exports.findAll = function (req, res) {
    Transaction.find(function(err, transactions) {
        if(err) res.send(500, err.message);
    
        console.log('GET /transactions')
        res.status(200).json(transactions);
    });
};

exports.create = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var transaction = new Transaction({
        amount: req.body.amount,
        categoryCode: req.body.categoryCode,
        merchant: req.body.merchant,
        merchantLogo: req.body.merchantLogo,
        transactionDate: req.body.transactionDate,
        transactionType: req.body.transactionType
	});

	transaction.save(function(err, transaction) {
		if(err) return res.send(500, err.message);
        res.status(200).json(transaction);
	});
};