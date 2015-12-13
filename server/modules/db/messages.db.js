var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    url = 'mongodb://localhost:27017/banners_db',
    localdb  = require('./db');

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }

    var collection = db.collection('messages');

    console.log("Connected to Database");
    collection.remove(function(err, result) {
        collection.insert(localdb, function (docs) {

            collection.count(function (err, count) {

                console.log("There are " + count + " messages.");
            });

            //collection.find({'name': 'First'}).toArray(function (err, docs) {
            //    docs.forEach(function (doc) {
            //        //console.log("name of first message: " + doc.name);
            //    });
            //});
        });
    });

    module.exports.getRelevantMessage = function(screen){

    }
});

