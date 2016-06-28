/**
 * Created by dchamberlain on 6/2/2016.
 */
define([],function(){
    function todoItemController (todoService) {

        var vm = this;
        console.log("loaded the main page controller");
        function loadResults(){
            todoService.query(function(results){
                vm.todos = results;
                console.log("got the results" , results);
            });
        }

        vm.add = function(){ //this is a sign my scope is at the wrong level.
                var newTodo = new todoService(vm.todo);
                newTodo.$save(newTodo, loadResults);
            vm.todo = {};
        }

        loadResults();

    }

    todoItemController.$inject = ["todoService"];

    return todoItemController;

});