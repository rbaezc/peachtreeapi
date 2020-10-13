var express = require('express'),
    cors    = require('cors'),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost:27017/peachtree', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var transactionsModel = require('./app/models/transaction.model')(app, mongoose);
var transactionsController = require('./app/controllers/transaction.controller');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var transactions = express.Router();

transactions.route('/transactions')
    .get(transactionsController.findAll)
    .post(transactionsController.create);

app.use('/api', transactions);

// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});