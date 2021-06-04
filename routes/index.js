  
const express = require('express');
const router = express.Router();

// Index page
router.get('/', function(req, res) {
    res.render('index.html');
});

// ml5_test
const user = require('./ml5_examples.js');
router.use('/ml5_examples', user);

module.exports = router;