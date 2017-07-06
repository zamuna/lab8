var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // req.db.restaurants.find({}, function (err, item) {
  //   var doc="";
  //   item.toArray(function (err, itemArr) {
  //     itemArr.forEach(function (element) {
  //       doc+=JSON.stringify(element);
  //     });
  //     res.send(doc);
  //   });
  // });


  //question 2
  //  req.db.restaurants.find({},{"restaurant_id":1,"name":1,"district":1,"cuisine":1}).each(function(err,data){
  //       console.dir(data);
  //     });

  //question 3
  // req.db.restaurants.find({},{"restaurant_id":1,"name":1,"district":1,"cuisine":1,"_id":0}).each(function(err,data){
  //   console.dir(data);
  // });

  //question 4
  // req.db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "district": 1, "zipcode": 1, "_id": 0 }).each(function (err, data) {
  //   if (!data) {
  //     next();
  //   }
  //   else {
  //     console.dir(data);
  //   }
  // });

  //question 5
  // req.db.restaurants.find({"district":"Bronx"}, {}).each(function(err,data){
  //   console.dir(data);
  // });

  //question 6 and 7
  //  req.db.restaurants.find({"district":"Bronx"}, {}).skip(5).limit(5).each(function(err,data){
  //   if (!data) {
  //     next();
  //   }
  //   else {
  //     console.dir(data);
  //   }
  // });

  //8
  // req.db.restaurants.find({"address.coord.1":{$lt:-95.754168}}, {}).skip(5).limit(5).each(function(err,data){
  //   console.dir(data);
  // });

  //9
  // req.db.restaurants.find(
  //   {
  //     $and:
  //     [
  //       { "address.coord.1": { $lt: -95.754168 } },
  //       { "cuisine": { $ne: "American" } },
  //       { "grade.score": { $lt: 70 } },
  //       { "address.coord.0": { $lt: -95.754168 } }
  //     ]
  //   }).each(function (err, data) {
  //     console.dir(data);
  //   });

  //10
  // req.db.restaurants.find({"name":{"$regex":"^Wil"}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1}).each(function(err,data){
  //   console.dir(data);
  // });

  //11
  //  req.db.restaurants.find({"name":{"$regex":"ces$"}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1}).each(function(err,data){
  //   console.dir(data);
  // });

  //12 incomplete
  // req.db.restaurants.createIndex({ name: 'text' });
  req.db.restaurants.find({ "name": { $regex: "reg" } }, { "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1 }).each(function (err, data) {
    // console.dir(data);
  });

  //13
  // req.db.restaurants.find({
  //   $and:
  //   [
  //     { "district": "Bronx" },
  //     { "cuisine": { $in: ["American ", "Chinese"] } }
  //   ]
  // },{"cuisine":1}).each(function (err, data) {
  //   console.dir(data);
  // });

//14 not working

//  req.db.restaurants.find({
//       "district": { $in: ["Staten Island", "Queens","Bronx","Brooklyn"] } 
//   },{"restaurant_id":1,"name":1,"district":1,"cuisine":1}).each(function (err, data) {
//     console.dir(data);
//   });

//15
// req.db.restaurants.find({
//       "district": { $nin: ["Staten Island", "Queens","Bronx","Brooklyn"] } 
//   },{"restaurant_id":1,"name":1,"district":1,"cuisine":1}).each(function (err, data) {
//     console.dir(data);
//   });

//16
//  req.db.restaurants.find({
//       "grades.score":{$lte:10}
//   },{"restaurant_id":1,"name":1,"district":1,"cuisine":1,"grades":1}).each(function (err, data) {
//     console.dir(data);
//   });


// req.db.restaurants.find({grades: {$elemMatch: {score: {$lte: 10}}}}, {
// 'restaurant_id': 1,
// 'name': 1,
// 'district': 1,
// 'cuisine': 1
// }).each(function (err, data) {
// if (!data) next();
// else console.log(data);

// });
//17
 req.db.restaurants.find({
      "address.coord.1":{$gt:42,$lte:52}
  },{"restaurant_id":1,"name":1,"address":1}).each(function (err, data) {
    // console.dir(data);
  });

  //18
  req.db.restaurants.find({}
  ,{"_id":0,"name":1}).sort({name:1}).each(function (err, data) {
    // console.dir(data);
  });
//19
req.db.restaurants.find({}
  ,{"_id":0,"name":1}).sort({name:-1}).each(function (err, data) {
    // console.dir(data);
  });
//20
req.db.restaurants.find({}
  ,{"_id":0,"cuisine":1,"district":1}).sort({cuisine:1,district:-1}).each(function (err, data) {
    // console.dir(data);
  });
  //21
  req.db.restaurants.find({'address.street':{$exists:false}},{}).each(function (err, data) {
// console.dir(data);
});
//22
req.db.restaurants.find({'address.coord':{$type:"double"}},{}).each(function (err, data) {
if (!data) next();
else console.log(data);

});

//23
req.db.restaurants.find({name: {$regex: '^Mad', $options:'i'}}, {
'name': 1,
'district': 1,
'address.coord': 1,
'address.street': 1,
'_id': 0
}).each(function (err, data) {
// if (!data) next();
// else 
// console.log(data);

})
  


  res.render('index', { title: 'MongoDb Express' });
});




module.exports = router;
