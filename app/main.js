require.config({
    map:{
        // Maps
    },
    paths:{
        // Aliases and paths of modules
    },
    shim:{
        // Modules and their dependent modules
    }
});

//using require to eliminate so many js files having to be loaded at in the index.html 
require(["module1/module","todo-directive/module"],
    function() {
        angular.bootstrap(document, ["module1","Components.todos"]);
    }
);