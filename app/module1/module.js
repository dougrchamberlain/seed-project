/**
 * Created by dchamberlain on 6/2/2016.
 */
define(
    ["module1/config",
    "module1/controller"],
    function(config,module1Controller){
        var app = angular.module("module1", ["ngResource","ui.router"]);
        app.config(config);
        app.controller("module1Controller", module1Controller);
    });