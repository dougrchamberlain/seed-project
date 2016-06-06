/**
 * Created by Doug on 6/3/2016.
 */
var express = require("express");
var path = require("path");
var router = express.Router();
console.log(__dirname);
var todoItemModel = require("../models/todoItem");

todoItemModel.methods(["get", "put", "post", "delete"]);
todoItemModel.register(router, "/todos");

module.exports = router;