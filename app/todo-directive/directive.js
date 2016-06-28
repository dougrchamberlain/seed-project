/**
 * Created by dchamberlain on 6/6/2016.
 */
define([],function(){
    function todoDirective ()
    {
        return {
            templateUrl: "../todo-directive/templates/module1.html",
            controller: "todoItemController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                todo: "=item"
            }

        };
    }

        return todoDirective;
});