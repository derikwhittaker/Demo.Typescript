var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Mammal;
(function (Mammal) {
    var Barkable = (function () {
        function Barkable() {
        }
        Barkable.prototype.bark = function (message) {
            console.log(message);
        };
        return Barkable;
    })();
    Mammal.Barkable = Barkable;

    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.apply(this, arguments);
        }
        return Dog;
    })(Barkable);
    Mammal.Dog = Dog;

    var Dingo = (function (_super) {
        __extends(Dingo, _super);
        function Dingo() {
            _super.apply(this, arguments);
        }
        return Dingo;
    })(Barkable);
    Mammal.Dingo = Dingo;
})(Mammal || (Mammal = {}));
