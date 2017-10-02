
var echo = function () {
    this.name = "echo";
};

echo.prototype.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback(err);
    }, "echo", "echo", [str]);
};



module.exports = new echo();
