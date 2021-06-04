const express = require('express');
const router = express.Router();

// test pages
router.get('/test1', function(req, res) {
    res.render('ml5_examples_test1.html');
});

module.exports = router;