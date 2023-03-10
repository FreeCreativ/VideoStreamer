const express = require('express');
const router = express.Router();
const db = require("../db")

/* GET users listing. */
router.get('/', function (req, res, next) {
    db('chat_chat').select('*').then(data => {
        console.log(data)
    })
    res.send('respond with a resource');
});

module.exports = router;
