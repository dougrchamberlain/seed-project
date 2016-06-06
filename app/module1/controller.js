/**
 * Created by dchamberlain on 6/2/2016.
 */
define([],function(){
    function todoItemController (todoService){

        var vm = this;



        function loadResults(){
            todoService.query(function(results){
                vm.todos = results;
                console.log("got the results" , results);
            });
        }

        vm.save = function(todo){
            if(todo._id){
                todoService.update(todo,loadResults);
            }
            else {
                var newTodo = new todoService(vm.todo);
                newTodo.$save(newTodo, loadResults);
            }
            vm.todo = {};
        }

        vm.remove = function(todo){
            todo.$remove(todo, loadResults);
            vm.todo = {};
        }

        loadResults();
    };

    todoItemController.$inject = ["todoService"];


    return todoItemController;

});