/**
 * Created by dchamberlain on 6/2/2016.
 */
define([],function(){
    function module1Controller ($scope){
        console.log("this controller loaded");
        $scope.testValue = "hello world";
    };

    module1Controller.$inject  = ["$scope"];

    return module1Controller;

});