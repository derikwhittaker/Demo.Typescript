var mammal;
(function (mammal) {
    var Dog = (function () {
        function Dog() { }
        Dog.prototype.walk = function () {
            console.log("Taking Steps -- Dog");
        };
        return Dog;
    })();
    mammal.Dog = Dog;    
    var Dingo = (function () {
        function Dingo() { }
        Dingo.prototype.walk = function () {
            console.log("Taking Steps -- Dingo");
        };
        return Dingo;
    })();
    mammal.Dingo = Dingo;    
    var Barker = (function () {
        function Barker() { }
        Barker.prototype.bark = function (message) {
            console.log(message);
        };
        return Barker;
    })();
    mammal.Barker = Barker;    
})(mammal || (mammal = {}));
