var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Mammal;
(function (Mammal) {
    var Barker = (function () {
        function Barker() { }
        Barker.prototype.bark = function (message) {
            console.log(message);
        };
        return Barker;
    })();
    Mammal.Barker = Barker;    
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.apply(this, arguments);

        }
        Dog.prototype.walk = function () {
            console.log("the dog is walking");
        };
        return Dog;
    })(Barker);
    Mammal.Dog = Dog;    
    var Dingo = (function (_super) {
        __extends(Dingo, _super);
        function Dingo() {
            _super.apply(this, arguments);

        }
        Dingo.prototype.walk = function () {
            console.log("the dingo is walking");
        };
        return Dingo;
    })(Barker);
    Mammal.Dingo = Dingo;    
})(Mammal || (Mammal = {}));
