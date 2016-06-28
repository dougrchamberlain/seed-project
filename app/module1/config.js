define([],function(){
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
        console.log();
    }

    config.$inject=["$stateProvider","$urlRouterProvider"]; //changed pattern cleans up function above

    return config;
});