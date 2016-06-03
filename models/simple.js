/**
 * Created by Doug on 6/2/2016.
 */
var restful = require("node-restful");
var mongoose = restful.mongoose;

var simpleSchema = new mongoose.Schema({
    title: String
});

module.exports = restful.model("simple", simpleSchema);