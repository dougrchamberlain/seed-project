define([],function(module1Controller){
    function config($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home",{
               url: "/",
                templateUrl:"../module1/templates/module1.html",
                controller: "module1Controller",
                controllerAs: "vm",
                bindToController: true
            });
        console.log("config is loaded");
    }

    config.$inject=["$stateProvider","$urlRouterProvider"];

    return config;
});