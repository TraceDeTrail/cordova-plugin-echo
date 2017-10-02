
var Echo = function () {
    this.name = "Echo";
};

Echo.prototype.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback(err);
    }, "test", "echo", [str]);
};



module.exports = new Echo();
