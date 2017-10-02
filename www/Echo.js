
var Echo = function () {
    this.name = "Echo";
};

Echo.prototype.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "echo", "echo", [str]);
};



module.exports = new Echo();
