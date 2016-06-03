/**
 * Created by dchamberlain on 6/2/2016.
 */
define([],function(){
    function module1Controller (){
        console.log("this controller loaded");
        var vm = this;
        vm.testValue = "hello world";
    };



    return module1Controller;

});