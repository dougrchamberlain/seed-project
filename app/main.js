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

require(["test"],function(myTest){
    myTest();
    console.log(myTest());
});