
var Echo = function () {
    this.name = "Echo";
};

Echo.prototype.echo = function(str, callback) {
    // cordova.exec(callback, function(err) {
    //     callback('Nothing to echo.');
    // }, "Echo", "echo", [str]);
    alert('test');
};



module.exports = new Echo();
