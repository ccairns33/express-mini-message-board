var express = require('express');
var router = express.Router();

/* GET new message. */
router.get('/', function(req, res, next) {
  res.render("form", { title: "Message Form"});
});


module.exports = router;
