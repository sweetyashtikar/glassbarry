const express = require('express');
const router = express.Router();

const offers = [
  // Same offers data as in your frontend code
];

router.get('/', (req, res) => {
    res.json(offers);
});

module.exports = router;
