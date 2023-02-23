const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.send('Recent Images')
});

module.exports = router;