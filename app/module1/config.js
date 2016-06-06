define([],function(todoItemController){
    function config($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home",{
               url: "/",
                templateUrl:"../module1/templates/module1.html",
                controller: "todoItemController",
                controllerAs: "vm",
                bindToController: true
            });
        console.log("config is loaded");
    }

    config.$inject=["$stateProvider","$urlRouterProvider"];

    return config;
});