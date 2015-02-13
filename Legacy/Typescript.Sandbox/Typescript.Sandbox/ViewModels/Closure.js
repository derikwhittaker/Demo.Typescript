var Test = (function () {
    function Test(first) {
        this.firstName = "Derik";
        this.lastName = "Whittaker";
        this.firstName = first;
    }
    Test.prototype.SayName = function () {
        var tFirstName = this.firstName;
        alert(tFirstName + " " + this.lastName);
    };
    return Test;
})();
exports.Test = Test;
