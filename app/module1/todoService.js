/**
 * Created by dchamberlain on 6/6/2016.
 */
define([],function(){
    function todoService($resource) {
        return $resource("/api/todos/:id", {id: '@_id'}, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        });
    }

    todoService.$inject = ["$resource"];

    return todoService;
});