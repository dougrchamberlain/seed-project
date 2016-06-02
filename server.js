var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var app = express();

app.use("/scripts", express.static(__dirname + "/bower_components"));
app.use("/", express.static(__dirname + "/app"));
app.use(bodyParser.json());


var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database){
    if(err){
        console.log(err);
        process.exit(1);
    }
});

var port = process.env.PORT;


function handleError(res, reason, message, code){
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

var server = app.listen(port, function(){
    var port = server.address().port;
    console.log(server.address());
    console.log("http://localhost:" + port )
});

