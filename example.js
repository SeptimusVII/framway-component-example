module.exports = function(app){
    var Example = Object.getPrototypeOf(app).Example = new app.Component("example");
    //Example.debug = true;
    Example.createdAt      = "2.0.0";
    Example.lastUpdate     = "2.0.0";
    Example.version        = "1";
    // Example.factoryExclude = true;
    Example.loadingMsg     = "Example component, used as a syntax and structure model. Do not use in production.";
    // Example.requires       = [];

    // Example.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Example;
}