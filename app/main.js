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


require(["module1/module"],
    function() {
        angular.bootstrap(document, ["module1"]);
    }
);