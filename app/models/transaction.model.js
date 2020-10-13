exports = module.exports = function(app, mongoose) {
    var TransactionSchema = new mongoose.Schema({
        amount: {type: String},
        categoryCode: {type: String},
        merchant: {type: String},
        merchantLogo: {type: String},
        transactionDate: {type: Date},
        transactionType: {type: String}
    });
    mongoose.model('Transaction', TransactionSchema);
};