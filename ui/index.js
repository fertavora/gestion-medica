/**
 * Created by tavete on 8/20/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var provincias = require('./provincias');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use('/', express.static('./site'));

app.get('/provincias', function(req, res){
    //temporal hasta implementar mongo
    res.status(200).send(provincias);
})

app.post('/pacientes', function(req, res){
    var mongo = require('mongodb').MongoClient
    var url = "mongodb://localhost:27017/lasermed-dev"

    mongo.connect(url, function(err, db){
        if(err){res.status(500).send(err)}
        var collection = db.collection('pacientes')
        collection.insertOne(req.body, function(err, result){
            if(err){res.status(500).send(err)}
            db.close()
            res.status(200).send(result)
        })
    })
})

var server = app.listen(5000);