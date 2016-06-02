/**
 * Created by dchamberlain on 6/2/2016.
 */
define(
    ["module1/module1Controller"],
    function(module1Controller){
        var app = angular.module("module1", ["ngResource"]);
        app.controller("module1Controller", module1Controller);
    });