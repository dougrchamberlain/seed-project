/**
 * Created by dchamberlain on 6/2/2016.
 */
define(
    ["todo-directive/directive","todo-directive/controller"],
    function(todoDirective,todoItemController){
        var app = angular.module("Components.todos", []);
        app.controller("todoItemController", todoItemController);
        app.directive("todoItem", todoDirective);
    });