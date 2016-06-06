/**
 * Created by dchamberlain on 6/2/2016.
 */
define(
    ["module1/config",
    "module1/controller",
    "module1/todoService"],
    function(config,todoItemController,todoService){
        var app = angular.module("module1", ["ngResource","ui.router"]);
        app.config(config);
        app.controller("todoItemController", todoItemController);
        app.factory("todoService",todoService);
    });