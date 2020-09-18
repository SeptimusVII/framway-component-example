module.exports = function(app){
    var Example = Object.getPrototypeOf(app).Example = new app.Component("example");
    //Example.debug = true;
    Example.createdAt      = "2.0.0";
    Example.lastUpdate     = "2.0.0";
    Example.version        = "1";
    // Example.factoryExclude = true;
    // Example.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Example.requires       = [];

    // Example.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Example;
}