var express = require('express');
var router = express.Router();
var globals = require('../globals');
var mongoRepository = globals.mongoRepository;

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoRepository.db.collection("topic_installs").find().toArray(function(err, docs){
    res.json(docs);
  });
});

module.exports = router;
