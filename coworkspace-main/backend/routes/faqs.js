const express = require('express');
const router = express.Router();

const faqs = [
  // Same FAQ data as in your frontend code
];

router.get('/', (req, res) => {
    res.json(faqs);
});

module.exports = router;
