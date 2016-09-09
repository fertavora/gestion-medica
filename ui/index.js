/**
 * Created by tavete on 8/20/16.
 */
var express = require('express')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use('/', express.static('./site'));
var server = app.listen(5000);