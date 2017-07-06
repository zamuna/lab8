var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();

// Handling post request
router.post('/', function (req, res, next) {
    const id = ObjectId(req.body.id);
    const name = req.body.name;
    const category = req.body.category;
    const lat = req.body.latitude;
    const long = req.body.longitude;

    const db = req.db;

    const doc = {
        'name': name,
        'category': category,
        'coords': [parseFloat(long), parseFloat(lat)]
    };

    db.lab8.update({_id: id}, doc, function (err, docUpdated) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(JSON.stringify({'success': 'false', 'message': 'Unable to update location!'}));
        else res.send(JSON.stringify({'success': 'true', 'message': 'Location updated successfully!'}));
    });
});

module.exports = router;