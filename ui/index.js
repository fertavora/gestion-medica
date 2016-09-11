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

var server = app.listen(5000);