/**
 * Created by Doug on 6/2/2016.
 */
var restful = require("node-restful");
var mongoose = restful.mongoose;

var todoItem = new mongoose.Schema({
    description: String,
    done: Boolean

});

module.exports = restful.model("todoItem", todoItem);