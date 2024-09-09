const express = require('express');
const router = express.Router();

const localities = [
  // Same localities data as in your frontend code
];

router.get('/', (req, res) => {
    res.json(localities);
});

module.exports = router;
