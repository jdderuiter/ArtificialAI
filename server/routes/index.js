var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Ranking app API v1.0');
});

module.exports = router;