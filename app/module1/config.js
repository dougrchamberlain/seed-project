define([],function(module1Controller){
    function config($stateProvider){
        $stateProvider
            .state("home",{
               url: "/",
                template: "<div>This is a stupid page {{vm.testValue}}</div>",
                controller: "module1Controller",
                controllerAs: "vm",
                bindToController: true
            });
        console.log("config is loaded");
    }

    config.$inject=["$stateProvider"];

    return config;
});