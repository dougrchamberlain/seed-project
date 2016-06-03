var express = require("express");
var restful = require("node-restful");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var app = express();

app.use("/scripts", express.static(__dirname + "/bower_components"));
app.use("/", express.static(__dirname + "/app"));
app.use(bodyParser.json());

app.use("/api", require(__dirname + "/routes/api"));


mongoose = restful.mongoose;
var CONTACTS_COLLECTION = "contacts";

mongoose.connect(process.env.MONGODB_URI, function (err, database){
    if(err){
        console.log(err);
        process.exit(1);
    }

    console.log("Database Connection Ready");

    var port = process.env.PORT;

    var server = app.listen(port, function(){
        var port = server.address().port;
        console.log(server.address());
        console.log("http://localhost:" + port )
    });

});



function handleError(res, reason, message, code){
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
