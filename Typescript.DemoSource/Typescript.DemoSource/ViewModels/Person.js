var mammal;
(function (mammal) {
    var Person = (function () {
        function Person() { }
        Person.prototype.walkIt = function (dog) {
            dog.walk();
        };
        Person.prototype.walkPack = function () {
            var dog = new mammal.Dog();
            var dingo = new mammal.Dingo();
            this.walkIt(dog);
            this.walkIt(dingo);
        };
        return Person;
    })();
    mammal.Person = Person;    
})(mammal || (mammal = {}));
