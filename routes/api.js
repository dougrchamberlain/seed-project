/**
 * Created by Doug on 6/3/2016.
 */
var express = require("express");
var path = require("path");
var router = express.Router();
console.log(__dirname);
var simpleModel = require("../models/simple");

simpleModel.methods(["get", "put", "post", "delete"]);
simpleModel.register(router, "/simple");

module.exports = router;