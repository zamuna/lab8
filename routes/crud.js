var express = require('express');
var router = express.Router();
var results_from_mongo = [];
/* GET home page. */

router.get('/', function (req, res, next) {

  req.db.locations.find({}).toArray(function (err, data) {
    results_from_mongo = data;
    console.dir(JSON.stringify(results_from_mongo));
     res.render('crud', {'results': results_from_mongo});
  });
});

/* POST Data */
router.post("/", function (req, res, next) {
  req.db.locations.insert(req.body,function(err,docs){
    if(err) throw err;
  });
  // req.db.locations.update({"_id":"595d30596b07f81a10cce8cb"},{},function(err,docs){
  //   if(err) throw err;
  //   else console.dir(docs);
  // });

  res.render('crud', { title: 'Crud Operation','results': results_from_mongo });
});

module.exports = router;

