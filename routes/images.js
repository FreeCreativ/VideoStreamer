const express = require('express');
const router = express.Router();
const db = require("../db")

router.get('', (req, res) => {
    db('image_image').select('*').then(data => {
        res.json(data)
    })
});

module.exports = router;