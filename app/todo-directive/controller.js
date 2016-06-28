/**
 * Created by dchamberlain on 6/2/2016.
 */
define([],function(){
    function todoItemController (todoService){

        var vm = this;
        console.log("loaded the directive controller");
       vm.save = function(){ //this is a sign my scope is at the wrong level.
          var todo = vm.todo;
                todoService.update(todo);

        }

        vm.remove = function(){ //same thing here, scope is at the wrong level
            var todo = vm.todo;
            todo.$remove();
        }


    };

    todoItemController.$inject = ["todoService"];


    return todoItemController;

});