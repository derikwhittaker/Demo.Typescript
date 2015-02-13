var Mammal;
(function (Mammal) {
    var Person = (function () {
        function Person() { }
        Person.prototype.walkIt = function (walker) {
            walker.walk();
        };
        Person.prototype.walkPack = function () {
            var dog = new Mammal.Dog();
            var dingo = new Mammal.Dingo();
            this.walkIt(dog);
            this.walkIt(dingo);
        };
        return Person;
    })();
    Mammal.Person = Person;    
})(Mammal || (Mammal = {}));
