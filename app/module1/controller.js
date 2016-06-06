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

        vm.save = function(){
            if(vm.todo._id){
                todoService.update(vm.todo,loadResults);
            }
            else {
                var newTodo = new todoService(vm.todo);
                newTodo.$save(newTodo, loadResults);
            }
        }

        loadResults();
    };

    todoItemController.$inject = ["todoService"];


    return todoItemController;

});