var express = require('express');
var router = express.Router();
var ObjectId=require('mongoDb').ObjectId;


router.post('/',function(req,res,next){
req.db.locations.remove({'_id':ObjectId(req.body.idDelete)},function(err,data){
    if(err) throw err;
    else
    console.log("deleted" +data);
    res.redirect('/crud');
});
});

module.exports = router;